export default function getListStudents() {
  const id = [1, 2, 5];
  const firstName = ['Guillaume', 'James', 'Serena'];
  const location = ['San Francisco', 'Columbia', 'San Francisco'];

  const result = id.map((value, index) => ({
    id: value,
    firstName: firstName[index],
    location: location[index],
  }));

  return result;
}
