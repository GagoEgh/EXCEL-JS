import { $ } from "@core/dom";

const charCode = {
  A: 65,
  Z: 91,
};

function createArray() {
  const size = charCode.Z - charCode.A;
  let chars = new Array(size).fill("");
  return chars;
}

function createChars() {
  let chars = createArray();
  chars = chars.map(
    (item, index) => (item = String.fromCodePoint(charCode.A + index))
  );
  return chars;
}

function createTitleBlock(chars, isSet = false) {
  let titleDiv = $.create("div", "title");

  if (chars.length > 0) {
    chars.forEach((item) => {
      let titleBlock = $.create("div", "title-block");

      titleBlock.toHTML(item);
      titleDiv.append(titleBlock);
      if (isSet) {
        titleBlock.setAttribute("contenteditable", "true");
        titleBlock.setAttribute("spellcheck", "false");
      }
    });
  }

  return titleDiv;
}

function createTitle(fn) {
  const chars = fn;
  return createTitleBlock(chars);
}

export function createTableHead() {
  let titleHead = $.create("div", "t-head");
  let index = $.create("div", "index");
  index.toHTML("N");
  titleHead.append(index);
  titleHead.append(createTitle(createChars()));
  return titleHead.$node;
}

export function createTableBody(columns = 20) {
  let chars = createArray();
  let block = $.create("div");
  for (let i = 0; i < columns; i++) {
    let mainNode = $.create("div", "t-main");
    let index = $.create("div", "index");
    index.toHTML("" + (i + 1));
    mainNode.append(index);
    let titleDiv = createTitleBlock(chars, true);
    mainNode.append(titleDiv);
    block.append(mainNode);
  }

  return block.$node;
}
