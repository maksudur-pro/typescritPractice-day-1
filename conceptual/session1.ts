{
  //

  // data types

  // special data type --> union, any, never, void

  let number: number = 120;
  let car: string = "tesla";
  let arr: number[] = [1, 2, 3, 4, 6];
  let fruits: Array<string> = ["apple", "orange"];
  let employee: [number, string, number] = [1, "mx", 2500]; // tuple
  let code: string | number = 5; // union --> |
  let something: any = true; // any type

  // practice 1

  // type User = {
  //   id: number;
  //   name: string;
  // };

  // const users: Array<User> = [
  //   {
  //     id: 1,
  //     name: "joy",
  //   },
  //   {
  //     id: 2,
  //     name: "saif",
  //   },
  //   {
  //     id: 3,
  //     name: "radil",
  //   },
  // ];
  // T --> ArrayOf object
  // function getPropertyArray<T, K extends keyof T>(array: T[], key: K): T[K][] {
  //   return array.map((obj) => obj[key]);
  // }
  // console.log(getPropertyArray(users, "id"));

  // practice -2

  const keyValueArray: [string, any][] = [
    ["id", 23],
    ["name", "Joy"],
    ["isMarried", true],
  ];

  function arrayToObject<T extends string, U>(array: [T, U][]): Record<T, U> {
    const transformObject = array.reduce((finalObj, [key, value]) => {
      finalObj[key] = value;
      return finalObj;
    }, {} as Record<T, U>);
    return transformObject;
  }

  // console.log(arrayToObject(keyValueArray));

  // practice 6

  const addFunction = (...rest: number[]): number => {
    let sum = 0;
    rest.forEach((number) => {
      sum = sum + number;
    });
    return sum;
  };

  console.log(addFunction(1 + 3 + 3));

  //
}
