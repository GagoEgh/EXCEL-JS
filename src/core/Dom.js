class Dom {}

export const $ = () => {
  return new Dom();
};


$.create = (element,classes)=>{
  let el = document.createElement(element);
  el.classList.add(classes);
  return el
}
