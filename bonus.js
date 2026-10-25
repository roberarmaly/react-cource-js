import { students } from "./data.js";
import withstatus from "./report.js";

const studentsWithStatus = withstatus(students);

for(const student of studentsWithStatus) {
    console.log(`${student.name}: ${student.status}`);
}
console.log(students[0].status);