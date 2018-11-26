import { EntityCollisionEvent } from "../interfaces/events";
import { Race } from "../race";

export class Entity{
  width: number = null;
  height: number = null;
  locationX: number = null;
  locationY: number = null;
  color: string = null;
  // race?: Race

  /**
   * This function will be called when a collision occurs
   */
  public onCollison(data:EntityCollisionEvent): void {
    // Override
  };
}
