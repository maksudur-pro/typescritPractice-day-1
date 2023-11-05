{
  //

  // generics type

  type GenericArray<T> = Array<T>;

  // const rollNumbers : number[] = [2,32,2];
  const rollNumbers: GenericArray<number> = [2, 32, 2];

  // const mentors: string[] = ['mr.x','mr.y','mr.z']
  const mentors: GenericArray<string> = ["mr.x", "mr.y", "mr.z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "joy",
      age: 23,
    },
    {
      name: "saif",
      age: 22,
    },
  ];

  const add = (x: number, y: number) => x + y;
  add(20, 33);

  // generic tuple

  type GenericTuple<x, y> = [x, y];

  const manush: GenericTuple<string, string> = ["mr. x", "mr. y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "joy", email: "maksudur@gmail.com" },
  ];

  //
}
