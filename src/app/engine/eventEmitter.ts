import { EntityCollisionEvent } from "../interfaces/events";

export class EventEmitter{
  private listeners = {};

  public emit(event:string, data:EntityCollisionEvent):void {
    //if nobody is listening to the event, return. (because you can't `for each` on something that doesn't exist)
    if(!this.listeners[event]) return;
    this.listeners[event].forEach(callback => {
      callback(data);
    });
  }

  public addEventListener(event:string, callback:() => void):void {
    if(!this.listeners[event]){
      //If the event doesn't exist, create a new one.
      this.listeners[event] = [];
    }
    //Push the callback to the given event.
    this.listeners[event].push(callback);
  }

}
