export default function getStudentsByLocation(getListStudents, city) {
  const objArr = getListStudents.filter((result) => result.location === city);
  return objArr;
}
