import { $ } from "@core/Dom";

export class TableSelector {
  constructor() {
    this.group = [];
  }

  getSelector($el) {
    this.#removeSelector();
    this.group.push($el);
    this.group.forEach((elem) => {
      elem.addClass("selector");
    });
  }

  showSelectors($sel) {
    let selector = {
      column: [],
      row: [],
    };

    if (this.group.length <= 1) {
      this.group.push($sel);
      this.group.forEach((elem) => {
        elem.addClass("selector");
        this.#cretaGroup(elem, selector);
      });
      this.#addSelector(selector.row, selector.column);
    }
  }

  #removeSelector() {
    this.group.forEach((elem) => {
      elem.removeClass("selector");
    });

    this.group = [];
  }

  #cretaGroup(elem, selector) {
    let dataId = elem.data.id.split(":");
    selector.column.push(+dataId[1]);
    selector.row.push(+dataId[0]);
  }

  #createSelectorGroup(sel) {
    if (sel[0] > sel[1]) {
      [sel[1], sel[0]] = [sel[0], sel[1]];
    }

    let selectorGroup = new Array(sel[1] - sel[0] + 1).fill("");

    selectorGroup = selectorGroup.map((item, index) => {
      return (item = sel[0] + index);
    });
    return selectorGroup;
  }

  #addSelector(row, column) {
    let rowSelector = this.#createSelectorGroup(row);
    let colSelector = this.#createSelectorGroup(column);

    rowSelector.forEach((row) => {
      colSelector.forEach((col) => {
        let id = `${row}:${col}`;
        let $sel = $(document.querySelector(`[data-id="${id}"]`));
        $sel.addClass("selector");
        this.group.push($sel);
      });
    });
  }
}
