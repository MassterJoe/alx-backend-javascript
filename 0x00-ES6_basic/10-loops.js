export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    let updatedValue = array.map((value) => appendString + value);
    return updatedValue;
  }
}
