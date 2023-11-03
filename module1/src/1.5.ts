{
  // reference type ---> object

  const user: {
    firstName: string;
    middleName: string;
    lastName: string;
  } = {
    firstName: "Maksudur",
    middleName: "rahman",
    lastName: "joy",
  };

  const userId: {
    readonly company: "Redon"; // type --> literal type
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: false;
  } = {
    company: "Redon",
    firstName: "Maksudur",
    lastName: "joy",
    isMarried: false,
  };

  // userId.company = "Phero"; // not work bcz we used type readonly
}
