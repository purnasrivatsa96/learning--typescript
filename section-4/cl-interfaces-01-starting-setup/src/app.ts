abstract class Department {
  // private name: string;
  protected employees: string[] = [];

  constructor(protected id: string, public name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department");
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, "Acconting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  printReports() {
    console.log(this.reports);
  }
  describe() {
    console.log(`Accounting Department ${this.id}:  ${this.name}`);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.addReport("Something went wrong");
accounting.printReports();

const it = new ITDepartment("d1", ["max"]);
accounting.addEmployee("Max");

// const ac = { name: "help", describe: accounting.describe };

const employee = Department.createEmployee("Max");
console.log(employee);
// ac.describe();
console.log(it);

// accounting.describe();

// accounting.employees[2] = "a  ";
