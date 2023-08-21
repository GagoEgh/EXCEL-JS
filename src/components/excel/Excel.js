import { $ } from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.components = options.components;
    this.$el = $(selector);
  }

  #createNode() {
    let excelDiv = $.create("div", "excel");
    this.components.forEach((Component) => {
      let className = $.create("div", Component.className);
      const component = new Component(className);
      className.toHTML(component.html());
      excelDiv.append(className);
    });

    return excelDiv;
  }

  render() {
    this.$el.append(this.#createNode());
  }
}
