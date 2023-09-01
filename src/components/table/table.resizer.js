import { $ } from "@core/Dom";

function getstyle($node, widthOrHeight) {
  let titleSelector = $node.querySelector(".title-block");
  let titleStyle = getComputedStyle(titleSelector);
  return parseInt(titleStyle[widthOrHeight]);
}

export function tableResizer(event, $node) {
  let width = 0;
  let height = 0;
  let $resizer = $(event.target);
  let $parentNode = $($resizer.closest('[data-type="resizing"]'));
  let blocks = [];
  let attribute;
  let type = $resizer.data.resize;
  let $nodeCord = $parentNode.getCords();
  let minHeight = getstyle($node, "height");
  let minWidth = getstyle($node, "minWidth");
  document.onmousemove = (e) => {
    if (type === "col") {
      width = e.pageX - $nodeCord.right + $nodeCord.width;

      if (width < minWidth) {
        width = minWidth;
      }
      $resizer.createStyle({ left: `${width}px` });
    } else {
      height = e.pageY - $nodeCord.bottom + $nodeCord.height;
      if (height < minHeight) {
        height = minHeight;
      }

      $resizer.createStyle({ top: `${height}px` });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    if (type === "col") {
      attribute = $parentNode.getAttribute("data-block");
      blocks = $($node.$node.querySelectorAll(`[data-block="${attribute}"]`));
      $parentNode.createStyle({ width: `${width}px` });
      blocks.$node.forEach((block) => {
        let $block = $(block);
        $block.createStyle({ width: `${width}px` });
      });
    } else {
      attribute = $parentNode.getAttribute("data-row");
      blocks = $($node.$node.querySelectorAll(`[data-row="${attribute}"]`));

      blocks.$node.forEach((block) => {
        let $block = $(block);
        $block.createStyle({ height: `${height}px` });
      });

      let titleBody = document.querySelector(".title-body");
      let titleBodyHeight = parseInt(getComputedStyle(titleBody).height);
      let cols = $node.$node.querySelectorAll('[data-resize="col"]');

      cols.forEach((col) => {
        let $col = $(col);
        $col.createStyle({ height: `${titleBodyHeight + 30}px` });
      });
    }
  };
}
