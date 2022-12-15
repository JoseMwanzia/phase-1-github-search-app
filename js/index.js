function createEmployeeRecord(array) {
    const employeeRecord = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
    return employeeRecord;
}
let createEmployeeRecords = function (employeeArrayData) {
    return employeeArrayData.map(function (array) {
      return createEmployeeRecord(array);
    });
  };