declare module "ZEPETO.Multiplay.Schema" {

	import { Schema, MapSchema, ArraySchema } from "@colyseus/schema"; 


	interface State extends Schema {
		players: MapSchema<Player>;
	}
	class Player extends Schema {
		sessionId: string;
		zepetoHash: string;
		zepetoUserId: string;
		transform: Transform;
		state: number;
	}
	class Transform extends Schema {
		position: Vector3;
		rotation: Vector3;
		scale: Vector3;
	}
	class Vector3 extends Schema {
		x: number;
		y: number;
		z: number;
	}
	class floorPlane extends Schema {
		onPlayer: Player;
		color: string;
		transform: Transform;
	}
}