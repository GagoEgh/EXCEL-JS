class Dom {
  constructor(el) {
    if (typeof el === "string") {
      this.$node = document.querySelector(el);
    } else {
      this.$node = el;
    }
  }

  append(tag) {
    if (tag instanceof Dom) {
      tag = tag.$node;
    }
    this.$node.append(tag);
    return this;
  }

  innerHTML(html) {
    if (typeof html === "string") {
      this.$node.innerHTML = html;
      return this;
    }
    return this.$node.outerHTML.trim();
  }

  on(event, callback) {
    this.$node.addEventListener(event, callback);
  }

  off(event, callback) {
    this.$node.removeEventListener(event, callback);
  }

  setAttribute(name, value) {
    this.$node.setAttribute(name, value);
  }
}

export const $ = (el) => {
  return new Dom(el);
};

$.create = (elemName, classes) => {
  let el = document.createElement(elemName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
