const fs = require('fs');

function countStudents(filepath) {
  try {
    const filecontent = fs.readFileSync(filepath, 'utf-8');

    const students = filecontent.trim().split('\n');
    if (students.length === 0) {
      throw new Error('Cannot load the database');
    }
    const fields = students[0].split(',');
    const studentsByField = []
    for (let i = 1; i < fields.length; i++) {
      studentsByField[fields[i]] = [];
    }
    for (let i = 1; i < students.length; i++) {
      const studentData = students[i].split(',');
      if (studentData.length !== fields.length) {
        continue;
      }
      for (let i = 1; i < studentData.length; i++) {
        studentsByField[fields[i]].push(studentData[i]);
      }
      console.log(`Number of students: ${students.length - 1}`);
      for (const field in studentsByField) {
        console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(',')}`);
      }
    
    }
  }
  catch (err) {
    console.error('Error:', err.message);
  }
}
module.exports = countStudents;
