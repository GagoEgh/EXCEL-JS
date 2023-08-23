class Dom {
  constructor(elem) {
    if (typeof elem === "string") {
      this.$node = document.querySelector(elem);
    } else {
      this.$node = elem;
    }
  }

  append(tag) {
    if (tag instanceof Dom) {
      tag = tag.$node;
    }
    this.$node.append(tag);
    return this;
  }

  toHTML(html) {
    if (typeof html === "string") {
      this.$node.innerHTML = html;
      return this;
    }

    return this.$node.outerHTML.trim();
  }

  on(event, callback) {
    addEventListener(event, callback);
  }

  off(event, callback) {
    removeEventListener(event, callback);
  }

  setAttribute(name, value) {
    this.$node.setAttribute(name, value);
    return this;
  }
}

export const $ = (el) => {
  return new Dom(el);
};

$.create = (element, classes = "") => {
  let el = document.createElement(element);
  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};
