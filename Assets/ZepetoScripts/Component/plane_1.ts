import { AnimationClip, Animator, Behaviour, Camera, CharacterController, Collider, Color, Component, GameObject, LayerMask, Material, Mathf, MonoBehaviour, Motion, Object, Quaternion, RuntimeAnimatorController, ScriptableObject, Texture, Texture2D, Transform, Vector2, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import * as UnityEngine from "UnityEngine";
import {UnityEvent} from "UnityEngine.Events";
import { floorPlane } from 'ZEPETO.Multiplay.Schema';

export default class plane_1 extends ZepetoScriptBehaviour {

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
    
    //public floorplane: GameObject;
    //public planeint: UnityEngine.Plane;
    // private CreatePlane(floorcount:number){
    //      for(var i=1;i>floorcount;i++){
    //          Object.Instantiate(this.floorplane);

    //         //  const planeValue = new floorPlane();
    //         //  planeValue.transform.position.x = 50;
    //         //  planeValue.transform.position.y = 0;
    //         //  planeValue.transform.position.z = 50;
    //         //  planeValue.transform.scale.x = 5;
    //         //  planeValue.transform.scale.y = 0;
    //         //  planeValue.transform.scale.z = 5;
    //         const Mesh = new UnityEngine.Mesh;
    //         const MeshRender = new UnityEngine.MeshRenderer;
    //         const MeshVector3_1 = new UnityEngine.Vector3(-1,1,0);
    //         const MeshVector3_2 = new UnityEngine.Vector3(1,1,0);
    //         const MeshVector3_3 = new UnityEngine.Vector3(-1,-1,0);
    //         const MeshVector3_4 = new UnityEngine.Vector3(1,-1,0);
    //         Mesh.SetVertices({
    //             MeshVector3_1,
    //             MeshVector3_2,
    //             MeshVector3_3,
    //             MeshVector3_4
    //         });
    //         const MeshVector2_1 = new UnityEngine.Vector2(0,1);
    //         const MeshVector2_2 = new UnityEngine.Vector2(1,1);
    //         const MeshVector2_3 = new UnityEngine.Vector2(0,0);
    //         const MeshVector2_4 = new UnityEngine.Vector2(1,0);
    //         Mesh.SetUVs(0,{
    //             MeshVector2_1,
    //             MeshVector2_2,
    //             MeshVector2_3,
    //             MeshVector2_4
    //         });

    //         Mesh.SetTriangles({
    //             0:0,
    //             1:1,
    //             2:2,
    //             3:2,
    //             4:1,
    //             5:3
    //         },1);

    //         Mesh.RecalculateNormals();
    //         console.log(Mesh);
    //         const MeshFilter = new UnityEngine.MeshFilter;
    //         MeshFilter.mesh = Mesh;
            
    //         const planePosition = new UnityEngine.Vector3(50,0,50);
    //         const planeScale = new UnityEngine.Vector3(5,0,5);
    //         const planeint = new UnityEngine.Plane(planePosition,planeScale);
    //     }
    // }

    // // public meterialValue: Material;
    // // public colorObject : UnityEngine.Color;

    // private selectColor(){
    //     const getRed = new UnityEngine.Color(255,0,0);
    //     const meterialValue = new UnityEngine.Material;
    //     meterialValue.color = getRed;
    // } 

    // public meterialValue = new UnityEngine.Material;
    // public tempObj = new GameObject();
    Start() {
        // this.getred.r = 255;
        // this.getred.g = 0;
        // this.getred.b = 0;
        // this.meterialValue.SetColor("_Color",this.getred);
        //this.planeObject.normal(100,100,100);
        //this.CreatePlane(9);
        // const planeNormal = new UnityEngine.Vector3(0,0,0);
        // const planePoint = new UnityEngine.Vector3(0,0,0);
        // const planeint = new UnityEngine.Plane(planeNormal,planePoint);
        // var planeintnormal: Vector3 = planeint.normal;
        // console.log(planeintnormal);
        //const obj = Object.Instantiate(this.tempObj);
        
    }

    Update(){

    }

}