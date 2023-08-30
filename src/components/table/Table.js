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
    this.$node.append(createBody(22));
  }

  onMousedown(event) {
    if (event.target.dataset.resize === "col") {
      const $parent = $(event.target.closest("[data-type='resizable']"));
      let parentCordinate = $parent.getCord();

      const parentAttr = $parent.getAttribute("data-id");
      const row = this.$node.getAllSelectors(`[data-id="${parentAttr}"]`);
      document.onmousemove = (ev) => {
        const newWidth = ev.clientX - parentCordinate.left;
        $parent.$node.style.width = newWidth + "px";

        row.forEach((item) => {
          item.style.width = newWidth + "px";
        });
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }

    if (event.target.dataset.resize === "row") {
      const $parent = $(event.target.closest("[data-type='resizable']"));

      let parentCordinate = $parent.getCord();

      document.onmousemove = (ev) => {
        const newHeight = ev.clientY - parentCordinate.bottom;
        $parent.$node.style.height = newHeight + "px";
        console.log(newHeight);
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
