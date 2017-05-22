module.exports = function gradeStudents(marks) {
  return marks.reduce((result, mark) => {
    if (mark % 5 >= 3 && mark >= 38 && mark !== 100) {
      while (mark % 5 !== 0) {
        mark++;
      }
    }
    result.push(mark);
    return result;
  }, []);
};
