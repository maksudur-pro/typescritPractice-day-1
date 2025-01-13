{
  // type vs interface
  // Interface,

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll1 = User1 & { role: string };

  interface UserWithRoll2 extends User1 {
    role: string;
  }

  type RollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  const user3: UserWithRoll2 = {
    name: "Joy",
    age: 25,
    role: "Hutse",
  };

  const user1: User2 = {
    name: "Joy",
    age: 25,
  };

  // js --> object, array --> object, function ---> Object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 5];
  //                             0 1 2 --> number type

  //   type Add = (num1: number, num2: number) => number;

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;

  //
}
