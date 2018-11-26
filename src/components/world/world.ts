import { Component } from '@angular/core';
import { Game } from '../../../src/app/game';

@Component({
  selector: 'world',
  templateUrl: 'world.html'
})

export class WorldComponent{
  constructor(private game:Game){
    setInterval(()=>{
      document.body.appendChild(game.canvas); //Temporary until I know how to append it to the actualy fucking component.
    }, 500);
  };
}
