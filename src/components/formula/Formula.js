import { ExcelComponent } from "../../core/Excel.component";

export class Formula extends ExcelComponent {
  static className = "formula";

  constructor(node) {
    const options = {
      name: "Formula",
      listeners: ["input", "click"],
    };
    super(node, options);
  }

  html() {
    return `
      <div class="info">fx</div>
      <div
        class="div-input"
        contenteditable="true"
        spellcheck="false"
      ></div>
    `;
  }

  onInput(event) {
    console.log("Formul event: onInput", event.target.innerText);
  }

  onClick() {}
}
