const employee = {
    name: "Nam",
    department: {
        name: "Engineering",
        floor: 5
    }
};

// Viết 1 câu lệnh destructuring để lấy ra 2 biến 
// employeeName có giá trị "Nam".
// departmentName có giá trị "Engineering".

const {
    name: employeeName,
    department: { name: departmentName }
} = employee;
console.log(employeeName);
console.log(departmentName);
