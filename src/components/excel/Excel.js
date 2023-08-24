import { $ } from "@core/Dom";

export class Excel {
  constructor(selector, options) {
    this.components = options.components;
    this.selector = $(selector);
  }

  #createNode() {
    let excel = $.create("div", "excel");

    this.components = this.components.map((Component) => {
      let node = $.create("div", Component.className);
      let component = new Component(node);
      node.innerHTML(component.toHTML());
      excel.append(node);
      return component;
    });

    this.selector.append(excel);
  }

  initComponent() {
    this.#createNode();
    this.components.forEach((component) => {
      component.init();
    });
  }
}
