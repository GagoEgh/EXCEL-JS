import { $ } from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.components = options.components;
    this.$el = $(selector);
  }

  #createNode() {
    let excelDiv = $.create("div", "excel");
    this.components = this.components.map((Component) => {
      let className = $.create("div", Component.className);
      const component = new Component(className);
      className.toHTML(component.html());
      excelDiv.append(className);
      return component;
    });

    return excelDiv;
  }

  render() {
    this.$el.append(this.#createNode());
    this.components.forEach((component) => {
      component.init();
    });
  }
}
