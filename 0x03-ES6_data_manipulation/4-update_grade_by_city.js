/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function updateStudentGradeByCity(students, city, grades){
    const studentsInCity = students.filter(student => student.location === city);

  return studentsInCity.map(student => {
    const gradeRecord = grades.find(grade => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeRecord ? gradeRecord.grade : 'N/A',
    };
  });
}
