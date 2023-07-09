export default function getStudentIdsSum(getListStudents) {
  const objArr = getListStudents
    .reduce((accumulator, getListStudents) => accumulator + getListStudents.id, 0);
  return objArr;
}
