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

  addClass(cl) {
    this.$node.classList.add(cl);
    return this;
  }

  closest(str) {
    return this.$node.closest(str);
  }

  getCords() {
    return this.$node.getBoundingClientRect();
  }

  getAttribute(attributeName) {
    return this.$node.getAttribute(attributeName);
  }
}

export const $ = (el) => {
  return new Dom(el);
};

$.create = (elemName, classes) => {
  let el = document.createElement(elemName);
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach((item) => {
        el.classList.add(item);
      });
    } else {
      el.classList.add(classes);
    }
  }
  return $(el);
};
