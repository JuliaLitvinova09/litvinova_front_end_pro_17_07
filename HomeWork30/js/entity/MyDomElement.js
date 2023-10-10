class MyDomElement {
  constructor(tagName, parentElement, content, attributes, handlers) {
    if (tagName === "inputGroup") {
      let parent = this.createElement(
        "div",
        parentElement,
        content,
        attributes,
        handlers
      );
      let parent2 = this.createElement(
        "input",
        parent,
        content,
        "form-control",
        handlers
      );
    } else {
      this.createElement(tagName, parentElement, content, attributes, handlers);
    }
  }

  createElement(tagName, parentElement, content, attributes, handlers) {
    let parent;
    if (typeof parentElement === "string") {
      parent = document.querySelector(parentElement);
    } else {
      parent = parentElement;
    }
    let element = document.createElement(tagName);

    if (content) {
      element.textContent = content;

      if (tagName === "input") {
        element.setAttribute("value", content);
      }
    }

    for (let attribute in attributes) {
      if (attribute === "className") {
        element.setAttribute("class", attributes[attribute]);
      } else {
        element.setAttribute(attribute, attributes[attribute]);
      }
    }

    for (let eventName in handlers) {
      element.addEventListener(eventName, handlers[eventName]);
    }

    parent.appendChild(element);
    return element;
  }
}
