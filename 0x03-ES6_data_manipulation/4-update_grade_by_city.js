export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((result) => result.location === city)
    .map((value) => {
      const obGrade = newGrades.filter((grade) => grade.studentId === value.id);
      const grade = obGrade.length ? obGrade[0].grade : 'N/A';

      return { ...value, grade };
    });
}
