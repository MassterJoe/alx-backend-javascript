export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('Student must be an array');
    } else if (!students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must contain only string values');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  // Implementing getters and setters
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = value;
  }
}
