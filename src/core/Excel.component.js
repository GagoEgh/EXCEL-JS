import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor(node, option = {}) {
    super(node, option.listeners);
    this.prepare()
  }
  
  prepare(){

  }
  toHTML() {
    return "";
  }

  init() {
    this.initListener();
  }

  destroy() {
    this.removeListener();
  }
}
