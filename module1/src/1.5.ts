// Reference Type ---> Object

// const user: {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "maksudur",
//   middleName: "Rahman",
//   lastName: "Joy",
// };

// const user: {
//   company: "Programming Hero"; // type ---> literal type
//   firstName: string;
//   middleName?: string; // optional type --> ?
//   lastName: string;
//   isMarried?: boolean;
// } = {
//   company: "Programming Hero",
//   firstName: "maksudur",
//   lastName: "Joy",
//   isMarried: false,
// };

const user: {
  readonly company: string; // type ---> literal type
  firstName: string;
  middleName?: string; // optional type --> ?
  lastName: string;
  isMarried?: boolean;
} = {
  company: "Programming Hero",
  firstName: "maksudur",
  lastName: "Joy",
  isMarried: false,
};

// user.company = "new company"; Cannot assign to 'company' because it is a read-only property.
