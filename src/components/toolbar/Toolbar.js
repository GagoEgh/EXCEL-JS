import { ExcelComponent } from "../../core/Excel.component";

export class Toolbar extends ExcelComponent {
  static className = "toolbar";
  constructor(node) {
    const options = {
      name: "Toolbar",
      listeners: ["click"],
    };
    super(node, options);
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
