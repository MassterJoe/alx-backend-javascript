export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // getter and setter
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number!');
    }
    this._sqft = value;
  }
}
