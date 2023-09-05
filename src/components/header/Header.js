import { ExcelComponent } from "../../core/Excel.component";

export class Header extends ExcelComponent {
  static className = "header";
  constructor(node, emitter) {
    const option = {
      name: "Header",
      emitter: emitter,
    };
    super(node, option);
  }
  toHTML() {
    return `
        <input value="new table" class="input" />
        <div>
          <i class="material-icons">delete</i>
          <i class="material-icons">exit_to_app</i>
        </div>
    `;
  }
}
