type Employee = {
  name: string;
  joiningDate: number;
};

type Leads = {
  lead: string;
};

type Manager = Employee & Leads;
const avi: Manager = {
  name: "Avi",
  joiningDate: Date.now(),
  lead: "CS department",
};

console.log(avi);

const Bikash: Employee = { name: "Bikash", joiningDate: Date.now() };
console.log(Bikash);
