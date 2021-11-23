import {Sandbox, SandboxOptions, SandboxPlayer} from "ZEPETO.Multiplay";
import {DataStorage} from "ZEPETO.Multiplay.DataStorage";
import {Player, Transform, Vector3} from "ZEPETO.Multiplay.Schema";

export default class extends Sandbox {

    constructor() {
        super();
    }

    public gamePlayerCount: number;
    private oneSec: number = 0;
    private oneMin: number = 0;
    private playerCount: number = 0;
    private nowGameState: string = "none";
    public dataColor: string[] = [
        "red", //1
        "orange", //2
        "yellow", //3
        "green", //4
        "blue", //5
        "purple", //6
        "white", //7
        "black",//8
    ];

    private randomData(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    public 
    public gameMap: string;
    public ranMap: number;

    onCreate(options: SandboxOptions) {
        // Room 객체가 생성될 때 호출됩니다.
        // Room 객체의 상태나 데이터 초기화를 처리 한다.
        this.onMessage("onChangedTransform", (client, message) => {
            const player = this.state.players.get(client.sessionId); 
            //들어올 놈에 대한 정보값이 먼저 넘어 온다?

            const transform = new Transform();
            transform.position = new Vector3();
            transform.position.x = message.position.x;
            transform.position.y = message.position.y;
            transform.position.z = message.position.z;

            transform.rotation = new Vector3();
            transform.rotation.x = message.rotation.x;
            transform.rotation.y = message.rotation.y;
            transform.rotation.z = message.rotation.z;

            player.transform = transform;
        });

        this.onMessage("echo", (client, message) => {
            console.log(`Echo on Message from ${client.sessionId}, -> ${message}`);

            client.send("echo", "echo to sender : " + message);
        });

        this.onMessage("onChangedState", (client, message)=>{
            const player = this.state.players.get(client.sessionId);
            player.state = message.state;
            console.log(message.state);
        });

        this.onMessage("MoveTo",(client,message)=> {
            console.log(message);
        })
    }

    async onJoin(client: SandboxPlayer) {

        // schemas.json 에서 정의한 player 객체를 생성 후 초기값 설정.
        console.log(`[OnJoin] sessionId : ${client.sessionId}, HashCode : ${client.hashCode}, userId : ${client.userId}`)

        // 입장 Player Storage Load
        const storage: DataStorage = client.loadDataStorage();

        const player = new Player();
        player.sessionId = client.sessionId;

        if (client.hashCode) {
            player.zepetoHash = client.hashCode;
        }
        if (client.userId) {
            player.zepetoUserId = client.userId;
        }
        //플레이어 객체를 생성해주고 플레이어 정보값에 맞는 해쉬 유저 새션아이디를 입

        // storage에 입장 유저의 transform이 존재하는 지 확인한 다음, 갱신합니다.
        const raw_val = await storage.get("transform") as string;
        const json_val = raw_val != null ? JSON.parse(raw_val) : JSON.parse("{}");

        const transform = new Transform();
        transform.position = new Vector3();
        transform.rotation = new Vector3();

        if (json_val.position) {
            transform.position.x = json_val.position.x;
            transform.position.y = json_val.position.y;
            transform.position.z = json_val.position.z;
        }

        if (json_val.rotation) {
            transform.rotation.x = json_val.rotation.x;
            transform.rotation.y = json_val.rotation.y;
            transform.rotation.z = json_val.rotation.z;
        }

        player.transform = transform;

        // client 객체의 고유 키값인 sessionId 를 사용해서 유져 객체를 관리.
        // set 으로 추가된 player 객체에 대한 정보를 클라이언트에서는 players 객체에 add_OnAdd 이벤트를 추가하여 확인 할 수 있음.
        this.state.players.set(client.sessionId, player);
        
        this.playerCount += 1;
        console.log("now player count is " + this.playerCount);
    }

    getTimeSandbox() {
        return Date.now();
    }

    onTick(deltaTime: number): void {
        //  서버에서 설정된 타임마다 반복적으로 호출되며 deltaTime 을 이용하여 일정한 interval 이벤트를 관리할 수 있음.
        //console.log(deltaTime.valueOf()); //서버 인터벌 타임 (고정)
        //this.time += deltaTime.valueOf();
        //this.broadcast("MoveTo",this.time);
        //console.log(this.time);

        if(this.playerCount > 1) this.nowGameState = "playing";
        else this.nowGameState = "none";

        this.nowGameState = "playing";

        if(this.nowGameState == "playing"){
            this.oneSec += deltaTime.valueOf();
            if(this.oneSec>1000){ // 1sec interval
                //this.broadcast("MoveTo",this.oneSec);
                this.oneSec = 0;
            }


            this.oneMin += deltaTime.valueOf();
            if(this.oneMin>60000){
                console.log("게임컬러를 선택합니다.");
                let ranColor:number;
                let gameColor:string;
                ranColor = this.randomData(1,8);
                switch(ranColor){
                    case 1:
                        gameColor = this.dataColor[0];
                        break;
                    case 2:
                        gameColor = this.dataColor[1];
                        break;
                    case 3:
                        gameColor = this.dataColor[2];
                        break;
                    case 4:
                        gameColor = this.dataColor[3];
                        break;
                    case 5:
                        gameColor = this.dataColor[4];
                        break;
                    case 6:
                        gameColor = this.dataColor[5];
                        break;
                    case 7:
                        gameColor = this.dataColor[6];
                        break;
                    case 8:
                        gameColor = this.dataColor[7];
                        break;
                }
                console.log(`${gameColor}가 선택되었습니다. 해당 칸으로 이동해주세요.`)
                this.broadcast("MoveTo",this.oneMin);
                this.oneMin = 0;
            }
        }
    }

    async onLeave(client: SandboxPlayer, consented?: boolean) {

        // 퇴장 Player Storage Load
        const storage: DataStorage = client.loadDataStorage();

        const _player = this.state.players.get(client.sessionId);
        const _pos = _player.transform.position;
        const _rot = _player.transform.rotation;

        const _trans = {
            position: {x: _pos.x, y: _pos.y, z: _pos.z},
            rotation: {x: _rot.x, y: _rot.y, z: _rot.z}
        };

        // console.log(`[onLeave] last transform : ${JSON.stringify(_trans)}`);
        // 퇴장하는 유저의 transform을 json 형태로 저장한 다음, 재접속 시 load 합니다.
        await storage.set("transform", JSON.stringify(_trans));

        // allowReconnection 설정을 통해 순단에 대한 connection 유지 처리등을 할 수 있으나 기본 가이드에서는 즉시 정리.
        // delete 된 player 객체에 대한 정보를 클라이언트에서는 players 객체에 add_OnRemove 이벤트를 추가하여 확인 할 수 있음.
        this.state.players.delete(client.sessionId);
    }

    // private functiontest(){
    //     this.broadcast("MoveTo",this.time);
    // }

    // private setIntervalSec(func: any, delay: number, deltaTime:number){
    //     this.time += deltaTime.valueOf();
    //     if(this.time>delay){
    //         this.time = 0;
    //         func;
    //     }
    // }
}