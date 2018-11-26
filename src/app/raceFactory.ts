import {Race} from "./race";

export abstract class RaceFactory {
  public static generateRaces(raceNum):Race[] {
    let races = [];
    for(let i = 0; i < raceNum; i++){
      races.push(new Race());
    }
    return races;
  };
}
