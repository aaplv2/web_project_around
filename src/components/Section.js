export default class Section {
  constructor({ items, renderer }, cssSelector) {
    this._items = items;
    this._renderer = renderer;
    this._cssElement = document.querySelector(cssSelector);
  }
  render() {
    this._items.forEach(this._renderer);
  }
  addItem(element) {
    this._cssElement.prepend(element);
  }
}
