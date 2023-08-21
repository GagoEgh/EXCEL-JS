import { ExcelComponent } from "../../core/Excel.component";

export class Formula extends ExcelComponent {
  static className = "formula";

  constructor(node) {
    super(node);
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
}
