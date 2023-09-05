import { ExcelComponent } from "../../core/Excel.component";
import { $ } from "@core/Dom";

export class Formula extends ExcelComponent {
  static className = "formula";
  constructor(node, emitter) {
    const option = {
      name: "Formula",
      listeners: ["input", "keydown"],
      emitter: emitter,
    };

    super(node, option);
  }

  toHTML() {
    return `
        <div class="info">fx</div>
        <div
          id = "input"
          class="div-input"
          contenteditable="true"
          spellcheck="false"
        ></div>
    `;
  }

  init() {
    super.init();
    this.subscribe("selector:input", (data) => {
      const input = $(this.$node.querySelector("#input"));
      input.innerHTML(data);
    });

  }
  
  onInput(event) {
    this.emit("formula:input", event.target.innerHTML);
  }

  onKeydown(event) {
    const keys = ["Enter", "Tab"];
    if (keys.includes(event.code)) {
      event.preventDefault();
      this.emit("formula:drop");
    }
  }
}
