{
  //

  // Introduction to generics type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  //   const mentors: string[] = ["mr.x", "mr.y", "mr.i"];
  const mentors: GenericArray<string> = ["mr.x", "mr.y", "mr.i"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArry: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Joy",
      age: 100,
    },
    {
      name: "Saif",
      age: 141,
    },
  ];

  //   generic tuple

  type GenericTuple<x, y> = [x, y];

  const manush: GenericTuple<string, string> = ["mr.x", "mr.y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1236,
    {
      name: "Joy",
      email: "maksudurjoy7@gmail.com",
    },
  ];

  //
}
