export function createElement(type, options = {}) {
    const element = document.createElement(type);
    Object.entries(options).forEach(([key, value]) => {
      if (key === "class") {
        element.classList.add(value)
        return
      }
  
      if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue
        })
        return
      }
  
      if (key === "text") {
        element.textContent = value
        return
      }
  
      element.setAttribute(key, value)
    })
    return element
};

export function querySelector(selector, parent = document) {
  return parent.querySelector(selector)
}

export function querySelectorAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

export function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
};

export function toggleClasses(selector, currentClass, newClass) {
  if(selector.classList.contains(currentClass)) {
    selector.classList.remove(currentClass);
    selector.classList.add(newClass);
  } else {
    selector.classList.remove(newClass);
    selector.classList.add(currentClass);
  }
}