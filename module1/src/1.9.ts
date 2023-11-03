{
  // Type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "joy",
    age: 22,
    gender: "male",
    contactNo: "327328732",
    address: "ktd",
  };

  const student2: Student = {
    name: "saif",
    age: 28,
    gender: "male",
    address: "ktd",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "joy";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
