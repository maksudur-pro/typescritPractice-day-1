{
  // Constraint using key of

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "JOy",
    age: 25,
    address: "ctg",
  };

  const result1 = getPropertyValue(user, "age");

  //   user

  //
}
