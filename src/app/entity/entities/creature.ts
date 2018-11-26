import {Race} from '../../race';
import {Entity} from '../entity'
import { EntityCollisionEvent } from '../../interfaces/events';

export class Creature extends Entity{
  maxStep: number = null //Max blocks they can move each step.
  isColliding: boolean = false; //'CollisionDetector' uses this variableBaseEntityCollisionHandler
  race: Race = null;


  constructor(maxStep, race){
    super();
    this.generateDetails();
    this.color = race.color;
    this.maxStep = maxStep;
    this.race = race;
    console.log(maxStep);
  }

  generateDetails(){
    this.width = Math.floor(Math.random() * 90) + 1;
    this.height = Math.floor(Math.random() * 90) + 1;
    this.locationX = Math.floor(Math.random() * window.innerWidth);
    this.locationY = Math.floor(Math.random() * window.innerHeight);
  };

  step(){
    let i = Math.floor(Math.random() * 4) + 1; //Randomizing possibilities
    switch(i){
      case 1:
        this.locationX += Math.floor(Math.random() * this.maxStep) + 1;
      break;
      case 2:
        this.locationX -= Math.floor(Math.random() * this.maxStep) + 1;
      break;
      case 3:
        this.locationY += Math.floor(Math.random() * this.maxStep) + 1;
      break;
      case 4:
        this.locationY -= Math.floor(Math.random() * this.maxStep) + 1;
      break;
    }
  }

  /**
 * This function will be called when a collision occurs
 */
  public onCollison(data: EntityCollisionEvent): void {
    let collidingCreature:Creature = <Creature>data.entities.filter((e) => {
      return e !== this && e instanceof Creature;
    }).pop();

    if(collidingCreature && collidingCreature.race !== this.race){

    }
  // console.log(data.entities);
  };

}
