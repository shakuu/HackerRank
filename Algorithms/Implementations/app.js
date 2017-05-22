const gradeStudents = require('./01-grading-students/grading-students');

const res = gradeStudents([
  73,
  67,
  38,
  33]);

console.log(res.join('\n'));