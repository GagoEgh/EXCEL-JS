import { ExcelComponent } from "../../core/Excel.component";
import { createTableHead, createTableBody } from "./table.template";

export class Table extends ExcelComponent {
  static className = "table";
  constructor(node) {
    super(node);
  }

  html() {
    this.$node.append(createTableHead());
    this.$node.append(createTableBody(14));
  }
}
