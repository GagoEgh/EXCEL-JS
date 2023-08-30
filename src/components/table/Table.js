import { ExcelComponent } from "../../core/Excel.component";
import { createHead, createBody } from "./table.template";
import { $ } from "@core/Dom";
import { tableResizer } from "./table.resizer";

export class Table extends ExcelComponent {
  static className = "table";
  constructor(node) {
    const options = {
      name: "Table",
      listeners: ["mousedown"],
    };
    super(node, options);
    this.$node = node;
  }

  toHTML() {
    this.$node.append(createHead());
    this.$node.append(createBody(19, this.$node));
  }

  getstyle(widthOrHeight) {
    let titleSelector = this.$node.querySelector(".title-block");
    let titleStyle = getComputedStyle(titleSelector);
    return parseInt(titleStyle[widthOrHeight]);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      tableResizer(event, this.$node);
    }
  }

  
}
