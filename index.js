// Write your solution in this file!
let employee = {
  name: "faith",
  streetAddress: 2098,
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee };

  newObj[key] = value;

  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];

  
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
  const newEmployee = employee
  delete newEmployee[key];

  
  return newEmployee;
}
