/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function getStudentIdsSum(students){
    return students.reduce((sum, student) => sum + student.id, 0);
}
