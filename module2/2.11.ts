{
  //

  // utility type

  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // omit

  type ContactInfo = Omit<Person, "name" | "age">;

  // required

  type PersonRequired = Required<Person>;

  // Partial

  type PersonPartial = Partial<Person>;

  // Readonly

  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "saif",
    age: 23,
    contactNo: "012",
  };
  //   person1.name = "mr. x";

  // Record

  // type MyObj = {
  //     a:string;
  //     b:string;
  // }

  type MyObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "ww",
    b: "djd",
    c: "dhdhd",
    d: 22,
  };

  //
}
