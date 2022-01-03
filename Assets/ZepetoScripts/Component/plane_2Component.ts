import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import * as UnityEngine from "UnityEngine";
import { Unit } from 'UnityEngine.UI.CanvasScaler';
import { Room } from 'ZEPETO.Multiplay';

export default class plane_2Component extends ZepetoScriptBehaviour {
    // //Renderer Object Select
    // public colorObject: UnityEngine.Renderer;
    // //color Object init
    // public getRed :UnityEngine.Color;
    // public getOrange :UnityEngine.Color;
    // public getYellow :UnityEngine.Color;
    // public getGreen :UnityEngine.Color;
    // public getBlue :UnityEngine.Color;
    // public getPurple :UnityEngine.Color;
    // public getWhite :UnityEngine.Color;
    // public getBlack :UnityEngine.Color;
    // //
    // private room: Room;

    // public colorSetting(){
    //     this.getRed = UnityEngine.Color.red;

    //     this.getOrange.r = 255;
    //     this.getOrange.g = 140;
    //     this.getOrange.b = 0;

    //     this.getYellow = UnityEngine.Color.yellow;
    //     this.getGreen = UnityEngine.Color.green;
    //     this.getBlue = UnityEngine.Color.blue;

    //     this.getPurple.r = 128;
    //     this.getPurple.g = 0;
    //     this.getPurple.b = 128;

    //     this.getWhite = UnityEngine.Color.white;
    //     this.getBlack = UnityEngine.Color.black;
    // }

    // private randomData(min: number, max: number){
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    // private switchColor(randomValue:number){
    //     switch(randomValue){
    //         case 0 :
    //             this.colorObject.material.color = this.getRed;
    //             break;
    //         case 1 :
    //             this.colorObject.material.color = this.getOrange;
    //             break;
    //         case 2 :
    //             this.colorObject.material.color = this.getYellow;
    //             break;
    //         case 3 :
    //             this.colorObject.material.color = this.getGreen;
    //             break;
    //         case 4 :
    //             this.colorObject.material.color = this.getBlue;
    //             break;
    //         case 5 :
    //             this.colorObject.material.color = this.getPurple;
    //             break;
    //         case 6 :
    //             this.colorObject.material.color = this.getWhite;
    //             break;
    //         case 7 :
    //             this.colorObject.material.color = this.getBlack;
    //             break;
    //     }
    // }

    public thisis: Object;
    public stringtest: String;

    public whatis(){
        this.thisis = this.Owner;
        console.log(this.thisis);
    }

    public stt(){
        this.stringtest = "Test sucessful";
        console.log(this.stringtest);
    }

    Start() {
        //this.colorObject = this.gameObject.GetComponent<UnityEngine.Renderer>();
        //Color setting before game start
        this.whatis();
    }

    Update(){
        //console.log(deltatime);
        //var randomTemp:number = this.randomData(0,7);
        //this.switchColor(randomTemp);
    }
}