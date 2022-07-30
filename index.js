const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  }


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
    };