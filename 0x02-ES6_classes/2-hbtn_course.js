export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students)) {
      throw new TypeError('student must be an array');
    }
    if (!students.every((item) => typeof item === 'string')) {
      throw new TypeError('stringArray must contain only string values');
    }
    this._students = students;
  }

  // Implementing getters and setters
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get length() {
    return this.length;
  }

  set length(value) {
    this.length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = value;
  }
}
