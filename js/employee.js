function highPackage(employee) {
    let highPackage = [];
    // sort the array in descending order

    highPackage = employee.sort((a, b) => {
        return a.salaryPackage - b.salaryPackage;
    });
    return highPackage.reverse();
}


class employee {
    salaryPackage = 0;
    hobbies = [];
    constructor(name, age, emp_id) {

        if (!name) {
            throw new Error(" Name caanot empty")
        }
        this.name = name,
            this.age = age,
            this.emp_id = emp_id

    }

    setHobbies(hobbies) {
        this.hobbies = hobbies;
    }

    setsalaryPackage(salary) {
        this.salaryPackage = salary;
    }
}





const Employee_DB = [];
let e;

e = new employee("Neeraj", 30, "as412539");
Employee_DB.push(e);

e = new employee("lakshmi", 27, "as412549");
Employee_DB.push(e);

e = new employee("priya", 23, "as412639");
Employee_DB.push(e);

console.log("Hired employee details:-")
console.log(Employee_DB);

console.log("Add hobbies of employees after training")

Employee_DB[0].setHobbies(["dancing, singing"]);
Employee_DB[1].setHobbies(["reading books, travelling"]);
Employee_DB[2].setHobbies(["cooking, singing"]);

console.log(Employee_DB);

Employee_DB[0].setsalaryPackage(30000);
Employee_DB[1].setsalaryPackage(35000);
Employee_DB[2].setsalaryPackage(34000);

console.log(Employee_DB);
let package = highPackage(Employee_DB);
console.log(package);
