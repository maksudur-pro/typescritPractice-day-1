{
  //  Utility types

  // pick Utility

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNumber: number;
  };

  type Nameage = Pick<Person, "name" | "age">;

  //   Omit ->bad deya
  type contactInfo = Omit<Person, "age" | "name">;

  // Required

  type PersonRequired = Required<Person>;

  //Partial --> optional make

  type PersonPartial = Partial<Person>;

  // ReadOnly

  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "joy",
    age: 55,
    contactNumber: 47,
  };

  //   person1.name = "jof";

  // Record
  

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "ff",
    b: "dd",
    c: "fd",
  };

  //
}
