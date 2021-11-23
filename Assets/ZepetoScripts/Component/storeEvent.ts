import { Button } from 'UnityEngine.UI'
import { Room, RoomData} from 'ZEPETO.Multiplay';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World';
import * as UnityEngine from "UnityEngine";

export default class storeEvent extends ZepetoScriptBehaviour {
    private storeBtn:Button;
    private room: Room;

    private Start() {
        this.storeBtn.onClick.AddListener(()=>{
            this.room.Send("storeItemInfo");
        })
    }


}