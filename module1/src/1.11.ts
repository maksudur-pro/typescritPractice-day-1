{
  // Ternary || optional chaining || nullish coalescing operator
  // Ternary

  const age: number = 15;

  //   if (age >= 18) {
  //     console.log("adult");
  //   } else {
  //     console.log("not adult");
  //   }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator --> ??
  // null / undefined ----> decision making
  const isAuthenticated = undefined;
  //   const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  //   optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentBasa: string;
      permanentBasa?: string;
    };
  };

  const user: User = {
    name: "JOy",
    address: {
      city: "DHK",
      road: "KSH",
      presentBasa: "KTD",
    },
  };

  const permanentBasa = user?.address?.permanentBasa ?? "No Permanent Basa";

  console.log({ permanentBasa });

  //
}
