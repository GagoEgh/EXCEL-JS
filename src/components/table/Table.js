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
    this.$node.append(createBody(31));
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      let $resizer = $(event.target);
      let type = $resizer.data.resize;
      let $node = $($resizer.closest('[data-type="resizing"]'));
      let attribute;
      let blocks = [];
      let $nodeCord = $node.getCords();

      document.onmousemove = (e) => {
        if (type === "col") {
          attribute = $node.getAttribute("data-id");
          blocks = $(
            this.$node.$node.querySelectorAll(`[data-id="${attribute}"]`)
          );

          let width = e.pageX - $nodeCord.right + $nodeCord.width;
          $node.createStyle({ width: `${width}px` });
          blocks.$node.forEach((block) => {
            let $block = $(block);
            $block.createStyle({ width: `${width}px` });
          });
        } else {
          attribute = $node.getAttribute("data-row");
          blocks = $(
            this.$node.$node.querySelectorAll(`[data-row="${attribute}"]`)
          );

          let height = e.pageY - $nodeCord.bottom + $nodeCord.height;
          $node.createStyle({ height: `${height}px` });
          blocks.$node.forEach((block) => {
            let $block = $(block);
            $block.createStyle({ height: `${height}px` });
          });
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
