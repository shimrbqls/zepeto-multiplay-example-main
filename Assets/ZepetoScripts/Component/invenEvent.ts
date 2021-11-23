import { Button } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class invenEvent extends ZepetoScriptBehaviour {

    private invenBtn: Button;

    Start() {    
        this.invenBtn.onClick.AddListener(()=> {
            console.log("click inven btn");
        })
    }

}