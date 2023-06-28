export default function createIteratorObject(report) {
  function* Iterator() {
    for (let i of Object.values(report.allEmployees)) {
      for (let m of i) {
        yield m;
      }
    }
  }
  return Iterator();
}