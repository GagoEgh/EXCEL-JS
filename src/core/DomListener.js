import { capitalizeLetter } from "./helpers";

export class DomListener {
  constructor(node, listeners = []) {
    this.$node = node;
    this.listeners = listeners;
  }

  initEventListener() {
    this.listeners.forEach((listener) => {
      let eventName = concatEvent(listener);
      this[eventName] = this[eventName].bind(this);
      this.$node.on(listener, this[eventName]);
    });
  }

  removeEventListener() {
    this.listeners.forEach((listener) => {
      let eventName = concatEvent(listener);
      this[eventName] = this[eventName].bind(this);
      
      this.$node.off(listener, this[eventName]);
    });
  }
}

function concatEvent(listener) {
  return "on" + capitalizeLetter(listener);
}
