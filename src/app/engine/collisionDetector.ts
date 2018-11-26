import {Creature} from '../entity/entities/creature'
import {EventEmitter} from './eventEmitter';
import { EntityCollisionEvent } from '../interfaces/events';

export class CollisionDetector extends EventEmitter{
  constructor(private handler:(event: EntityCollisionEvent)=> void){
    super();
  }
  //TODO: Emit the events to the 'creatures' and the 'game' or something like that~. :)
  public detectCollisions(creatures:Creature[]) {
    creatures.forEach(a => {
      creatures.forEach(b => {
        // if the loop is running on the same creature: return.
        if (a === b) return;
        if (b.locationX + b.width > a.locationX && a.locationX + a.width > b.locationX) {
          //collision on the X axis
          if (b.locationY + b.height > a.locationY && a.locationY + a.height > b.locationY) {
            //collision on the Y axis
            console.log("collison!");
            let eventData:EntityCollisionEvent = {
              time: Date.now(),
              fresh: false,
              entities: [a, b]
            }
            if (!b.isColliding && !a.isColliding) {
              //Fresh collision!
              eventData.fresh = true;
            }
            this.handler(eventData);
            this.emit('collision', eventData);
            a.onCollison(eventData);
            b.onCollison(eventData);
            b.isColliding = true;
            a.isColliding = true;
          }
          else {
            b.isColliding = false;
            a.isColliding = false;
          }
        }
      });
    });
  }
}
