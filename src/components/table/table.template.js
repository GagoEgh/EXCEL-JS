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

function createTittleBlock(chars, isAttr = false) {
  let title = $.create("div", "title");

  chars.forEach((item, index) => {
    let titleBlock = $.create("div", "title-block");
    let block = $.create("div", "block");
    block.setAttribute("data-id", `${index}`);
    block.append(titleBlock);
    if (isAttr) {
      titleBlock.setAttribute("contenteditable", "true");
      titleBlock.setAttribute("spellcheck", "false");
    } else {
      let col = $.create("div", "col");
      titleBlock.innerHTML(item);
      col.setAttribute("data-resize", "col");
      block.append(col);
      block.setAttribute("data-type", "resizing");
    }
    title.append(block);
  });

  return title;
}

function createIndex(html) {
  let index = $.create("div");
  index.innerHTML(html);
  return index;
}

function createIndexBlock(i) {
  let index = createIndex("" + (i + 1));
  let row = $.create("div", "row");
  row.setAttribute("data-resize", "row");

  let indexBlock = $.create("div", "index");
  indexBlock.append(index);
  indexBlock.append(row);
  indexBlock.setAttribute("data-type", "resizing");
  indexBlock.setAttribute("data-row", i);
  return indexBlock;
}
export function createBody(column = 22) {
  let block = $.create("div");
  let chars = emptyBlock();

  for (let i = 0; i < column; i++) {
    let indexBlock = createIndexBlock(i);
    let main = $.create("div", "t-main");
    let title = createTittleBlock(chars, true);
    title.setAttribute("data-row", i);
    main.setAttribute("data-row", i);
    main.append(indexBlock);
    main.append(title);
    block.append(main);
  }

  return block.$node;
}

export function createHead() {
  let index = $.create("div", "index");

  index.innerHTML("N");
  let head = $.create("div", "t-head");
  head.append(index);
  const chars = createChar();
  let title = createTittleBlock(chars);
  head.append(title);
  return head.$node;
}
