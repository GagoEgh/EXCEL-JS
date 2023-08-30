import { $ } from "@core/Dom";

const char = {
  A: 65,
  Z: 91,
};

function emptyBlock() {
  const size = char.Z - char.A;
  let chars = new Array(size).fill("");
  return chars;
}

function createChar() {
  let chars = emptyBlock();
  chars = chars.map((item, index) => {
    item = String.fromCharCode(char.A + index);
    return item;
  });
  return chars;
}

function createCol() {
  let col = $.create("div", "col");
  col.setAttribute("data-resize", "col");
  return col;
}

function createBlock(index, titleBlock) {
  let block = $.create("div", "block");
  block.setAttribute("data-id", `${index}`);
  block.append(titleBlock);
  block.setAttribute("data-type", "resizing");
  return block;
}

function createTittleBlock(chars, isAttr = false) {
  let title = $.create("div", "title");
  chars.forEach((item, index) => {
    let titleBlock = $.create("div", "title-block");
    let block = $.create("div", "block");
    block.innerHTML(item);
    titleBlock.append(block);
    titleBlock.setAttribute("data-id", `${index}`);
    if (isAttr) {
      block.setAttribute("contenteditable", "true");
      block.setAttribute("spellcheck", "false");
    } else {
      let col = $.create("div", "col");
      col.setAttribute("data-resize", "col");
      titleBlock.append(col);
    }

    title.append(titleBlock);
    titleBlock.setAttribute("data-type", "resizable");
  });

  return title;
}

function createIndex(html) {
  let index = $.create("div", "index");

  index.innerHTML(html);
  if (html !== "N") {
    let row = $.create("div", "row");
    row.setAttribute("data-resize", "row");
    index.setAttribute("data-type", "resizable");
    index.append(row);
  }

  return index;
}

function createIndexBlock(i) {
  const size = char.Z - char.A;

  let width = size * 180 * 2;
  console.log(width);
  let index = createIndex("" + (i + 1));
  let row = $.create("div", "row");
  row.setAttribute("data-resize", "row");
  row.createStyle({ width: `${width}px` });
  let indexBlock = $.create("div", "index");
  indexBlock.append(index);
  indexBlock.append(row);
  indexBlock.setAttribute("data-type", "resizing");
  indexBlock.setAttribute("data-row", i);
  return indexBlock;
}

export function columnHaight(size, parent, h = 30) {
  let col = parent.$node;
  let columns = $(col.querySelectorAll('[data-resize="col"]'));

  columns.$node.forEach((column) => {
    let $column = $(column);
    $column.createStyle({ height: `${size * h + 50}px` });
  });
}

export function createBody(size = 22, parent) {
  let block = $.create("div", "title-body");
  let chars = emptyBlock();

  for (let i = 0; i < size; i++) {
    let indexBlock = createIndexBlock(i);
    let main = $.create("div", "t-main");
    let title = createTittleBlock(chars, true);
    title.setAttribute("data-row", i);
    main.setAttribute("data-row", i);
    main.append(indexBlock);
    main.append(title);
    block.append(main);
  }
  columnHaight(size, parent);
  return block.$node;
}

export function createHead() {
  let index = createIndex("N");
  let head = $.create("div", "t-head");
  head.append(index);
  const chars = createChar();
  let title = createTittleBlock(chars);
  head.append(title);
  return head.$node;
}
