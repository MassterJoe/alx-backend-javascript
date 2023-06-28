export default function createReportObject(employeesList) {
  const objCreated = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return (num = Object.keys(objCreated).length);
    },
  };
  return objCreated;
}
