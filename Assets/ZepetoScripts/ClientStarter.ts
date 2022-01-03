import {ZepetoScriptBehaviour} from 'ZEPETO.Script'
import {ZepetoWorldMultiplay} from 'ZEPETO.World'
import {Room, RoomData} from 'ZEPETO.Multiplay'
import {Player, State, Vector3} from 'ZEPETO.Multiplay.Schema'
import {CharacterState, SpawnInfo, ZepetoPlayers, ZepetoPlayer} from 'ZEPETO.Character.Controller'
import * as UnityEngine from "UnityEngine";
import storeEvent from './Component/storeEvent';
import plane_2Component from "./Component/plane_2Component";
import { Scene, SceneManager } from 'UnityEngine.SceneManagement'
import { Button } from 'UnityEngine.UI'


export default class Starter extends ZepetoScriptBehaviour {

    public multiplay: ZepetoWorldMultiplay;
    public storeBTN: storeEvent;
    private room: Room;
    private currentPlayers: Map<string, Player> = new Map<string, Player>();

     //Renderer Object Select
     public plane1: UnityEngine.Renderer;
     public plane2: UnityEngine.Renderer;
     public plane3: UnityEngine.Renderer;
     public plane4: UnityEngine.Renderer;
     public plane5: UnityEngine.Renderer;
     public plane6: UnityEngine.Renderer;
     public plane7: UnityEngine.Renderer;
     public plane8: UnityEngine.Renderer;
     public plane9: UnityEngine.Renderer;

     //
     private plane1Object: plane_2Component;
     //private teststring: string;


     //color Object init
     public getRed :UnityEngine.Color;
     public getOrange :UnityEngine.Color;
     public getYellow :UnityEngine.Color;
     public getGreen :UnityEngine.Color;
     public getBlue :UnityEngine.Color;
     public getPurple :UnityEngine.Color;
     public getWhite :UnityEngine.Color;
     public getBlack :UnityEngine.Color;

    private Start() {

        this.getRed = UnityEngine.Color.red;

        this.getOrange.r = 255;
        this.getOrange.g = 140;
        this.getOrange.b = 0;

        this.getYellow = UnityEngine.Color.yellow;
        this.getGreen = UnityEngine.Color.green;
        this.getBlue = UnityEngine.Color.blue;

        this.getPurple.r = 128;
        this.getPurple.g = 0;
        this.getPurple.b = 128;

        this.getWhite = UnityEngine.Color.white;
        this.getBlack = UnityEngine.Color.black;

        this.multiplay = this.gameObject.GetComponent<ZepetoWorldMultiplay>();
        //this.plane1Object = UnityEngine.GameObject.FindObjectOfType<plane_2Component>();
        // this.plane1Object = UnityEngine.GameObject.FindObjectOfType
        // this.plane1 = UnityEngine.GameObject.FindObjectOfType<UnityEngine.Renderer>();
        // this.plane1.
        this.multiplay.RoomCreated += (room: Room) => {
            this.room = room;
        };

        this.multiplay.RoomJoined += (room: Room) => {
            room.OnStateChange += this.OnStateChange;
            room.Send("echo", "hello ZEPETO"); //서버로 보내기
            room.AddMessageHandler("echo",(message)=>{ //서버에서 받을 메시지 핸들러
                console.log(message); //받은 내용 처리
            })

            room.AddMessageHandler("storeItemInfo",(message)=>{
                console.log("Send to Client");
            })

            var time:number = 0;

            room.AddMessageHandler("MoveTo",(message)=>{
                console.log(message);
                //time++;
                //room.Send("MoveTo",time);
                // if(time > 9){
                //     room.Send("MoveTo",time);
                //     time = 0;
                // }
                message = String(message);
                console.log(typeof message);
                console.log(message);
                var ranNumber = message.split(`,`); 
                // this.switchColor(ranNumber[0],this.plane1);
                // this.switchColor(ranNumber[1],this.plane2);
                // this.switchColor(ranNumber[2],this.plane3);
                // this.switchColor(ranNumber[3],this.plane4);
                // this.switchColor(ranNumber[4],this.plane5);
                // this.switchColor(ranNumber[5],this.plane6);
                // this.switchColor(ranNumber[6],this.plane7);
                // this.switchColor(ranNumber[7],this.plane8);
                // this.switchColor(ranNumber[8],this.plane9);
            })
        };
        this.StartCoroutine(this.SendMessageLoop(0.1));
    }

    private convertMessage(Value:Object){
        
    }

    private switchColor(randomValue:string,planeObject:UnityEngine.Renderer){
        switch(randomValue){
            case "1" :
                planeObject.material.color = this.getRed;
                console.log("get RED");
                break;
            case "2" :
                planeObject.material.color = this.getOrange;
                console.log("get Orange");
                break;
            case "3" :
                planeObject.material.color = this.getYellow;
                console.log("get YELLOW");
                break;
            case "4" :
                planeObject.material.color = this.getGreen;
                console.log("get Green");
                break;
            case "5" :
                planeObject.material.color = this.getBlue;
                console.log("get Blue");
                break;
            case "6" :
                planeObject.material.color = this.getPurple;
                console.log("get Purple");
                break;
            case "7" :
                planeObject.material.color = this.getWhite;
                console.log("get White");
                break;
            case "8" :
                planeObject.material.color = this.getBlack;
                console.log("get Black");
                break;
        }
    }

    // 일정 Interval Time으로 내(local)캐릭터 transform을 server로 전송합니다.
    private* SendMessageLoop(tick: number) {
        while (true) {
            yield new UnityEngine.WaitForSeconds(tick);

            if (this.room != null && this.room.IsConnected) {
                const hasPlayer = ZepetoPlayers.instance.HasPlayer(this.room.SessionId);
                if (hasPlayer) {
                    const myPlayer = ZepetoPlayers.instance.GetPlayer(this.room.SessionId);
                    if (myPlayer.character.CurrentState != CharacterState.Idle)
                        this.SendTransform(myPlayer.character.transform);
                }
            }
        }
    }

    private OnStateChange(state: State, isFirst: boolean) {

        // 첫 OnStateChange 이벤트 수신 시, State 전체 스냅샷을 수신합니다.
        if (isFirst) {

            // [CharacterController] (Local)Player 인스턴스가 Scene에 완전히 로드되었을 때 호출
            ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
                const myPlayer = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer;

                myPlayer.character.OnChangedState.AddListener((cur, next) => {
                    this.SendState(next);
                });
            });

            // [CharacterController] Player 인스턴스가 Scene에 완전히 로드되었을 때 호출
            ZepetoPlayers.instance.OnAddedPlayer.AddListener((sessionId: string) => {
                const isLocal = this.room.SessionId === sessionId;
                if (!isLocal) {
                    const player: Player = this.currentPlayers.get(sessionId);

                    // [RoomState] player 인스턴스의 state가 갱신될 때마다 호출됩니다.
                    player.OnChange += (changeValues) => this.OnUpdatePlayer(sessionId, player);
                }
            });
        }

        let join = new Map<string, Player>();
        let leave = new Map<string, Player>(this.currentPlayers);

        state.players.ForEach((sessionId: string, player: Player) => {
            if (!this.currentPlayers.has(sessionId)) {
                join.set(sessionId, player);
            }
            leave.delete(sessionId);
        });

        // [RoomState] Room에 입장한 player 인스턴스 생성
        join.forEach((player: Player, sessionId: string) => this.OnJoinPlayer(sessionId, player));

        // [RoomState] Room에서 퇴장한 player 인스턴스 제거
        leave.forEach((player: Player, sessionId: string) => this.OnLeavePlayer(sessionId, player));
    }

    private OnJoinPlayer(sessionId: string, player: Player) {
        console.log(`[OnJoinPlayer] players - sessionId : ${sessionId}`);
        this.currentPlayers.set(sessionId, player);

        const spawnInfo = new SpawnInfo();
        const position = this.ParseVector3(player.transform.position);
        const rotation = this.ParseVector3(player.transform.rotation);
        spawnInfo.position = position;
        spawnInfo.rotation = UnityEngine.Quaternion.Euler(rotation);

        const isLocal = this.room.SessionId === player.sessionId;
        ZepetoPlayers.instance.CreatePlayerWithUserId(sessionId, player.zepetoUserId, spawnInfo, isLocal);
    }

    private OnLeavePlayer(sessionId: string, player: Player) {
        console.log(`[OnRemove] players - sessionId : ${sessionId}`);
        this.currentPlayers.delete(sessionId);

        ZepetoPlayers.instance.RemovePlayer(sessionId);
    }

    private OnUpdatePlayer(sessionId: string, player: Player) {

        const position = this.ParseVector3(player.transform.position);

        const zepetoPlayer = ZepetoPlayers.instance.GetPlayer(sessionId);
        zepetoPlayer.character.MoveToPosition(position);

        if (player.state === CharacterState.JumpIdle || player.state === CharacterState.JumpMove)
            zepetoPlayer.character.Jump();
    }

    private SendTransform(transform: UnityEngine.Transform) {
        const data = new RoomData();

        const pos = new RoomData();
        pos.Add("x", transform.localPosition.x);
        pos.Add("y", transform.localPosition.y);
        pos.Add("z", transform.localPosition.z);
        data.Add("position", pos.GetObject());

        const rot = new RoomData();
        rot.Add("x", transform.localEulerAngles.x);
        rot.Add("y", transform.localEulerAngles.y);
        rot.Add("z", transform.localEulerAngles.z);
        data.Add("rotation", rot.GetObject());
        this.room.Send("onChangedTransform", data.GetObject());
    }

    private SendState(state: CharacterState) {
        const data = new RoomData();
        data.Add("state", state);
        this.room.Send("onChangedState", data.GetObject());
    }

    private ParseVector3(vector3: Vector3): UnityEngine.Vector3 {
        return new UnityEngine.Vector3
        (
            vector3.x,
            vector3.y,
            vector3.z
        );
    }
}