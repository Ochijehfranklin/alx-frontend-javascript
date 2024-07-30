/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function getListStudentIds(students, i){
    if(!Array.isArray(students)){
        return [];
    }
    return students.map(student => student.id);
}
