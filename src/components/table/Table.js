import { ExcelComponent } from "../../core/Excel.component";
import { createHead, createBody } from "./table.template";
export class Table extends ExcelComponent {
  static className = "table";
  constructor(node) {
    super(node);
    this.$node = node;
  }
  toHTML() {
    this.$node.append(createHead());
    this.$node.append(createBody(12));
  }
}
