import { ExcelComponent } from "../../core/Excel.component";

export class Formula extends ExcelComponent {
  static className = "formula";
  constructor(node) {
    const option = {
      name: "Formula",
      listeners: ["input", "click"],
    };

    super(node, option);
  }

  toHTML() {
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
    console.log("on input", event.target.innerHTML);
  }

  onClick(event) {
    // console.log("on click", event.target);
  }
}
