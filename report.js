const withstatus = (students) => {
    const studentsWithStatus = [];

    for (const student of students) {
        studentsWithStatus.push(
            {...student,
                status: student.grade >= 56? "pass" : "fail",
            });
    }
    return studentsWithStatus;
};
export default withstatus;