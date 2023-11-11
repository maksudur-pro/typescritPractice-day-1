{
  //

  // type guards

  // typeof --> type guard

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, "3");
  console.log(result1);

  //in guard

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
      console.log(`My name is ${user.name} and my role is Normal`);
    }
  };

  const normalUser: NormalUser = {
    name: "Normal bhai",
  };
  const adminUser: AdminUser = {
    name: "Admin bhai",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
