import { firstLetterUpper } from "./helpers";

export class DomListener {
  constructor(node, listeners = []) {
    this.$node = node;
    this.listeners = listeners;
  }

  initListener() {
    this.listeners.forEach((listener) => {
      const event = "on" + firstLetterUpper(listener);
      if (!this[event]) {
        const name = this.name || "";
        throw new Error(
          `Method ${event} is not implemented in ${name} Component`
        );
      }

      this[event] = this[event].bind(this);
      this.$node.on(listener, this[event]);
    });
  }

  removeListener() {
    this.listeners.forEach((listener) => {
      const event = "on" + firstLetterUpper(listener);
      this.$node.off(listener, this[event]);
    });
  }
}
