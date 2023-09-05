import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor(node, option = {}) {
    super(node, option.listeners);
    this.emitter = option.emitter;
    this.prepare();
  }

  prepare() {}

  emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  subscribe(event, fn) {
    this.emitter.subscribe(event, fn);
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
