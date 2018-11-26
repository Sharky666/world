import {Creature} from "./entity/entities/creature";

export class Race{
    color = null //Generate a random color, and then base the color of the creatures from this race on it.
    maxStep = Math.floor(Math.random() * 25) + 1; //Each race have maximum blocks they can move each step.

    constructor() {
      this.color = this.convertRgbToHex(this.generateRgb());
    };

    generateCreatures(n): Creature[] {
        let creatures:Creature[] = [];
        for (let i = 0; i < n; i++) {
            creatures.push(new Creature(this.maxStep, this));
        }
        return creatures;
    }

    private convertRgbToHex(rgb:number[]){
      let finalHex = '#';
      rgb.forEach((c) => {
        const hex = c.toString(16);
        finalHex += finalHex + hex.length === '1' ? '0' + hex : hex;
      });
      return finalHex;
    }
    private generateRgb() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return [r, g, b];
    }

}
