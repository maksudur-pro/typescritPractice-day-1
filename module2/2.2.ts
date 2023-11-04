{
  //

  // interface

  type User1 = {
    name: string;
    age: number;
  };
  type UserWithRoll1 = User1 & { role: string };

  const user1: UserWithRoll1 = {
    name: "joy",
    age: 22,
    role: "manager",
  };

  type rollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user2: UserWithRoll2 = {
    name: "joy",
    age: 22,
    role: "manager",
  };

  const user: User2 = {
    name: "joy",
    age: 22,
  };

  // js ---> object , array -> object , function -> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const roll1: Roll1 = [12, 12, 2, 3, 3];
  const roll2: Roll2 = [12, 12, 2, 3, 3];

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}
