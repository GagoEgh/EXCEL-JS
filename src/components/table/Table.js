import { $ } from "@core/Dom";
import { ExcelComponent } from "../../core/Excel.component";
import { createHead, createBody } from "./table.template";
import { tableResizer } from "./table.resizer";
import { isResizer } from "./table.helpers";
import { TableSelector } from "./table.selectors";
import { changeSelector } from "./table.helpers";

export class Table extends ExcelComponent {
  static className = "table";
  size = 20;
  constructor(node, emitter) {
    const options = {
      name: "Table",
      listeners: ["mousedown", "keydown", "input", "click"],
      emitter: emitter,
    };
    super(node, options);
    this.$node = node;
  }

  prepare() {
    this.selector = new TableSelector();
  }

  init() {
    super.init();
    let table;
    let el = this.$node.querySelector('[data-id="0:0"]');
    this.selector.getSelector($(el));

    this.subscribe("formula:input", (data) => {
      table = $(this.$node.querySelector(".selector"));
      table.innerHTML(data);
    });

    this.subscribe("formula:drop", () => {
      table.focus();
    });
  }

  toHTML() {
    this.$node.append(createHead());
    this.$node.append(createBody(this.size, this.$node));
  }

  getstyle(widthOrHeight) {
    let titleSelector = this.$node.querySelector(".title-block");
    let titleStyle = getComputedStyle(titleSelector);
    return parseInt(titleStyle[widthOrHeight]);
  }

  onMousedown(event) {
    if (isResizer(event)) {
      tableResizer(event, this.$node);
    } else if (event.target.dataset.id) {
      if (event.shiftKey) {
        this.selector.showSelectors($(event.target));
      } else {
        this.selector.getSelector($(event.target));
      }
    }
  }

  onKeydown(event) {
    changeSelector(event, this.size);
  }

  onInput(event) {
    let selector = $(event.target);
    this.emit("selector:input", selector.getText());
  }

  onClick(event) {
    let selector = $(event.target);
    let text = selector.getText();
    this.emit("selector:input", selector.getText());
  }
}
