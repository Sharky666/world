import { Entity } from "../entity/entity";

export interface EntityCollisionEvent {
  fresh: boolean;
  time?:number;
  entities:Entity[];
}
