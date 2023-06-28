export default function createReportObject(employeesList) {
    const objCreated = {
        allEmployees: employeesList,
        getNumberOfDepartments() {
            let num = Object.keys(objCreated).length;
            return num;
        },
    };
    return objCreated;
}