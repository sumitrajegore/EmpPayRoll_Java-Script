class EmployeePayrollData {
    //properties
    id;
    salary;

    //constructors
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter methods
    get name() { return this._name; }
    set name(name) {
        console.log("setting : " + name);
        this._name = name;
    }

    //toString method
    toString() {
        return "id=" + this.id + " : name=" + this.name + " : salary=" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 3000);
process.stdout.write(employeePayrollData.toString() + "\n");
employeePayrollData.name = "Jon";
process.stdout.write(employeePayrollData.toString());
