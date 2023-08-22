const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        console.log(`Number of students: ${lines.length - 1}`);

        const fields = lines[0].split(',');

        for (const field of fields) {
            const students = lines.slice(1).map(line => line.split(',')[fields.indexOf(field)]);
            const nonEmptyStudents = students.filter(student => student.trim() !== '');

            console.log(`Number of students in ${field}: ${nonEmptyStudents.length}. List: ${nonEmptyStudents.join(', ')}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}module.exports = countStudents;

