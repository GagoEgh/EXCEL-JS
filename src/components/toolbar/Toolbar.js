import { ExcelComponent } from "../../core/Excel.component";

export class Toolbar extends ExcelComponent {
  static className = "toolbar";
  constructor(node) {
    super(node);
  }

  toHTML() {
    return `
        <i class="material-icons">format_align_left</i>
        <i class="material-icons">format_align_right</i>
        <i class="material-icons">format_align_center</i>
        <i class="material-icons">format_bold</i>
        <i class="material-icons">format_underlined</i>
        <i class="material-icons">format_italic</i>
    `;
  }

  onClick(event) {
    console.log(event.target);
  }
}
