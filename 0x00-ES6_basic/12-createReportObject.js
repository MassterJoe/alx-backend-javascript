export default function createReportObject(employeesList) {
  const objCreated = {
    allEmployees: employeesList,

    getNumberOfDepartments() {
      return Object.keys(objCreated).length;
    },
  };
  return objCreated;
}
