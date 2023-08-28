import { ExcelComponent } from "../../core/Excel.component";
import { createHead, createBody } from "./table.template";
import { $ } from "@core/Dom";

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
    this.$node.append(createBody(12));
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      let $resizer = $(event.target);
      let $node = $($resizer.closest('[data-type="resizing"]'));
      let attribute = $node.getAttribute("data-id");

      let $nodeCord = $node.getCords();
      let blocks = this.$node.$node.querySelectorAll(
        `[data-id="${attribute}"]`
      );

      document.onmousemove = (e) => {
        let width = e.pageX - $nodeCord.right + $nodeCord.width;
        $node.$node.style.width = width + "px";
        blocks.forEach((block) => {
          block.style.width = width + "px";
        });
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
