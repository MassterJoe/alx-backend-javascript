// import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // getters and setters
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('Value must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new Error('ConversionRate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
}
