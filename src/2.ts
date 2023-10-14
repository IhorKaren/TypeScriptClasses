/*
  Your task will be to create two classes - Employee and Manager.

  The Employee class should include:

  name property, which will be available to everyone.
  department property, which will only be available inside the Employee class.
  salary, which will be available only inside the Employee class and its subclasses.


  The Manager class must be a subclass of the Employee class

  It is necessary to implement a constructor in the Manager class that will call the constructor of the superclass and increase the salary by 10,000.

*/

class Employee {
  constructor(
    public name: string,
    private department: string,
    private salary: number
  ) {}

  public getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string) {
    super(name, "Management", 10000);
  }
}

export {};
