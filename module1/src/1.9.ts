{
  // Type alias in typescript

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Joy",
    age: 22,
    gender: "male",
    contactNo: "01700000000",
    address: "ktd",
  };

  const student2: Student = {
    name: "Jerry",
    age: 22,
    gender: "male",
    address: "ktd",
  };
  const student3: Student = {
    name: "Jibon",
    age: 22,
    gender: "male",
    address: "ktd",
  };

  type UserName = string;
  const userName: UserName = "Joy";

  type Sum = (num1: number, num2: number) => number;
  const add: Sum = (num1, num2) => num1 + num2;

  //
}
