class Employee{ // employee class
    constructor(name, jobTitle) {
        this.name = name;
        this.jobTitle = jobTitle;
    }

    describe() {
        return `${this.name}s job title is ${this.jobTitle}.`;
    }
}

class Department{ // departments class
    constructor(name){
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) { // add employee method
        if (employee instanceof Employee) { // verify argument is instance of Employee class
            this.employees.push(employee); // add employee to employees array
        } else {
            throw new Error(`${employee} is not an employee. Try again.`);
        }
    }

    describe() {
        return `${this.name} has ${this.employees.length} employees.`;
    }
}

class Menu { // Menu class
    constructor() {
        this.departments = []; // initialize departments array
        this.selectedDepartment = null; // initialize selected department 
    }

    start() {
        let selection = this.showMainMenuOptions(); // show the main menu options

        while (selection != 0) { // verify user has not exited menu
            switch (selection) {
                case '1':
                    this.createDepartment(); // create new department if '1'
                    break;
                case '2':
                    this.viewDepartment(); // view department if '2'
                    break;
                case '3': 
                    this.deleteDepartment(); // delete department if '3'
                    break;
                case '4':
                    this.displayDepartments(); // display all departments if '4'
                    break;
                default:
                    selection = 0; 
            }
            selection = this.showMainMenuOptions(); // show menu again if invalid menu choice
        }

        alert('Goodbye!'); // display Goodbye if user selects '0'
    }

    showMainMenuOptions() { // Displays MAIN MENU
        return prompt(`
        DEPARTMENT MAIN MENU
        ----------------------
        0) exit
        1) create new department
        2) view department
        3) delete department
        4) display all departments
        `);
    }

    showDepartmentMenuOptions(departmentInfo) { // Displays Department Menu
        return prompt(`
        EMPLOYEE MENU
        ---------------
        0) back
        1) create employee
        2) delete employee
        ---------------
        ${departmentInfo} 
        `); // Displays the name of the department
    }

    displayDepartments() { // display all departments function
        let departmentString = '';
        for (let i = 0; i < this.departments.length; i++) {
            departmentString += `
            ${i}) ${this.departments[i].name}`;
        }
        alert(departmentString);
    }

    createDepartment() { // create department function
        let name = prompt('Enter name for new Department: ');
        this.departments.push(new Department(name));
    }

    viewDepartment() { // view department of chosen index
        let index = prompt('Enter the index of the department you wish to view:');
        if (index > -1 && index < this.departments.length) {
            this.selectedDepartment = this.departments[index];
            let description = 'Department Name: ' + this.selectedDepartment.name + '\n'; // shows dept name

            for (let i = 0; i < this.selectedDepartment.employees.length; i++) {
                description += i + ') ' + this.selectedDepartment.employees[i].name + ' - ' +
                  this.selectedDepartment.employees[i].jobTitle + '\n'; // shows employees name + job title in dept
            }

            let selection = this.showDepartmentMenuOptions(description); 
            switch (selection) {
                case '1':
                    this.createEmployee(); // calls createEmployee function if '1'
                    break;
                case '2':
                    this.deleteEmployee(); // calls deleteEmployee function if '2'
            }
        }
    }

    deleteDepartment() { // delete department function
        let index = prompt('Enter the index of the department you wish to delete:');
        if (index > -1 && index < this.departments.length) {
            this.departments.splice(index, 1); // removes dept from depts array by index
        }
    }

    createEmployee() { // create employee function
        let name = prompt('Enter name of new employee:');
        let jobTitle = prompt('Enter job title for new employee:');
        this.selectedDepartment.employees.push(new Employee(name, jobTitle)); // adds employee and job title to employees array
    }

    deleteEmployee() { // delete employee function
        let index = prompt('Enter the index of the employee you wish to delete:');
        if(index > -1 && index < this.selectedDepartment.employees.length) {
            this.selectedDepartment.employees.splice(index, 1); // removes employee from employees array by index
        }
    }
}

let menu = new Menu(); // create instance of Menu
menu.start(); // displays the main menu on start up