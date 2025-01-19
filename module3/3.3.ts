{
  // Type guard using typeof & in

  // typeof --> type guard

  type Alphanumeric = number | string;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add(2, 3);
  const res2 = add("2", "3");
  console.log(res1);
  console.log(res2);

  // in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name} `);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal",
  };

  const adminUser: AdminUser = {
    name: "Mr. admin",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
