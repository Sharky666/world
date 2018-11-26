import { Race } from "./race";
import { Creature } from "./entity/entities/creature";
import { RaceFactory } from "./raceFactory";
import { CollisionDetector } from "./engine/collisionDetector";
import { BaseEntityCollisionHandler } from "./engine/baseEntityCollisionHandler";

export class Game {
  collisionDetector:CollisionDetector = new CollisionDetector(BaseEntityCollisionHandler);
  canvas = null;
  ctx = null;
  races: Race[] = [];
  creatures: Creature[] = [];

  constructor() {
      this.createCanvas();
      this.races = RaceFactory.generateRaces(3)
        .map(race => {
          this.creatures = this.creatures.concat(race.generateCreatures(5));
          return race;
        });
      setInterval(() => {
          this.loop();
      }, 1000);
  }

  private loop() {
    this.collisionDetector.detectCollisions(this.creatures);
    this.render();
  }

  render() {
    this.clearCanvas();
    this.creatures.forEach((e) => {
      this.ctx.fillStyle = e.color;
      e.step();
      this.ctx.fillRect(e.locationX, e.locationY, e.width, e.height);
    });
  };

  createCanvas() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  }

  clearCanvas() {
    this.ctx.fillStyle = "#f7faff";
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
