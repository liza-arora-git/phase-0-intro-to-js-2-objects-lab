// Write your solution in this file!
let employee = {
    name: `liza`,
    streetAddress: `51 Foleys Road`,
};
console.log(employee);

let newEmployee;

function updateEmployeeWithKeyAndValue(employee, key, value) {
    newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee[key]=value;
    return newEmployee;
}

console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));
console.log(newEmployee);
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam';
    employee[key] = value;
    return employee;
};

console.log(destructivelyUpdateEmployeeWithKeyAndValue);
console.log(employee);

let deleteNewEmployee;

function deleteFromEmployeeByKey(employee, key) {
    deleteNewEmployee = {...employee};
    delete deleteNewEmployee[key];
    return deleteNewEmployee;
}

console.log(deleteFromEmployeeByKey);
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    console.log(destructivelyDeleteFromEmployeeByKey);
    console.log(employee);
    return employee;
}

