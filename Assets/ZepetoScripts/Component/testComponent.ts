import { Random } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class testComponent extends ZepetoScriptBehaviour {

    Start() {    

    }

    Update(){

    }

    RandomCreate(){
        let randomSpon = Random.Range(1,7);

        switch(randomSpon){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
        }
    }

}