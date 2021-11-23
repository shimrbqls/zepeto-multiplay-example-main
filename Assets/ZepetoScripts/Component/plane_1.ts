import { AnimationClip, Animator, Behaviour, Camera, CharacterController, Collider, Color, Component, GameObject, LayerMask, Material, Mathf, MonoBehaviour, Motion, Object, Quaternion, RuntimeAnimatorController, ScriptableObject, Texture, Texture2D, Transform, Vector2, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import * as UnityEngine from "UnityEngine";

export default class plane_1 extends ZepetoScriptBehaviour {
    
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

    // public monobehaviourValue: MonoBehaviour;
    // public behaviourValue: Behaviour;
    // public componentValue: Component;
    // public objectValue: Object;
    // public scripableobjectValue: ScriptableObject;
    // public vector2Value: Vector2;
    // public vector3Value: Vector3;
    // public texture2dValue: Texture2D;
    // public textureValue: Texture;
    // public animatorValue: Animator;
    // public charactercontroller: CharacterController;
    // public colliderValue: Collider;
    // public quaternionValue: Quaternion;
    // public animationclipValue: AnimationClip;
    // public motionValue: Motion;
    // public cameraValue: Camera;
    // public transformValue: Transform;
    // public gameObjectValue: GameObject;
    // public LayerMask: LayerMask;
    // public runtimeAnimatorController: RuntimeAnimatorController;
    public meterialValue: Material;
    
    public getred : UnityEngine.Color;
    
    Start() {
        this.getred.r = 255;
        this.meterialValue.SetColor("_Color",this.getred);
    }

    Update(){

    }

}