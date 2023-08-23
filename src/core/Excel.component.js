import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor(node, options = {}) {
    super(node, options.listeners);
    if (!node) {
      throw new Error("node is not declaret");
    }
  }

  html() {
    return "";
  }

  init() {
    this.initEventListener();
  }

  destroy() {
    this.removeEventListener();
  }
}
