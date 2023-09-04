import { ExcelComponent } from "../../core/Excel.component";
import { createHead, createBody } from "./table.template";
import { $ } from "@core/Dom";
import { tableResizer } from "./table.resizer";
import { isResizer } from "./table.helpers";
import { TableSelector } from "./table.selectors";
import { changeSelector } from "./table.helpers";

export class Table extends ExcelComponent {
  static className = "table";
  size = 24;
  constructor(node) {
    const options = {
      name: "Table",
      listeners: ["mousedown", "keydown"],
    };
    super(node, options);
    this.$node = node;
  }
  prepare() {
    this.selector = new TableSelector();
  }

  init() {
    super.init();
    let el = this.$node.querySelector('[data-id="0:0"]');
    this.selector.getSelector($(el));
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
}
