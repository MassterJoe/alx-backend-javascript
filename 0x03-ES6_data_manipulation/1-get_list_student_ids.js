export default function getListStudentIds(objArr) {
  if (Array.isArray(objArr) === false) {
    return [];
  }
  const idArr = objArr.map((result) => result.id);
  return idArr;
}
