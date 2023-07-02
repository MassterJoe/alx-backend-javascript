export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  // getters and setters

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  // cast the class into a number
  valueOf() {
    return this._size;
  }

  // cast into a string
  toString() {
    return this._location;
  }
}
