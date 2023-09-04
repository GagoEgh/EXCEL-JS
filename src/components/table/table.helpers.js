import { $ } from "@core/Dom";
import { char } from "./table.template";

export function isResizer(event) {
  return event.target.dataset.resize;
}

export function nextSelector(row, col, ev) {
  let selector = $(document.querySelector(`[data-id="${row}:${col}"]`));
  selector.addClass("selector").focus();
  ev.toggle("selector");
}

export function changeSelector(event, length) {
  const keyCode = [
    "Tab",
    "Enter",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
  ];

  let selector = $(event.target);
  let id = selector.data.id.split(":");

  let [row, col] = id;
  let { code } = event;
  let size = char.Z - char.A;
  if (keyCode.includes(code)) {
    event.preventDefault();
    switch (code) {
      case "Tab":
      case "ArrowRight":
        +col++;
        col > size - 1 ? (col = size) : nextSelector(row, col, selector);
        break;
      case "Enter":
      case "ArrowDown":
        +row++;
        row > length - 1 ? (col = length) : nextSelector(row, col, selector);
        break;
      case "ArrowUp":
        +row--;
        row < 0 ? (row = 0) : nextSelector(row, col, selector);
        break;
      case "ArrowLeft":
        +col--;
        col < 0 ? (col = 0) : nextSelector(row, col, selector);
        break;
    }
  }
}
