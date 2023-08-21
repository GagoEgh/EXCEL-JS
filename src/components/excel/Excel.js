import { $ } from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.components = options.components;
    this.$el = selector;
  }

  #createNode() {
    let excelDiv = $.create("div", "excel");
    this.components.forEach((Component) => {
      const component = new Component();
      let className = $.create("div", new Component().constructor.className);
      className.innerHTML = component.html();
      excelDiv.append(className);
    });

    return excelDiv;
  }

  render() {
    console.log(this.$el)
    const app = document.querySelector(this.$el);
    app.append(this.#createNode());
  }
}
