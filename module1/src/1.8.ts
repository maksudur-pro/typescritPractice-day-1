// object Destructuring

const user = {
  id: 345,
  name: {
    firstName: "Maksudur",
    middleName: "Rahman",
    lastName: "Persian",
  },
  address: "uganda",
  contactNo: "173236832",
};

const {
  contactNo,
  name: { middleName },
} = user;

// array Destructuring

const myFriends = ["saif", "radil", "ross", "rachel", "monica"];

const [, bestFriend, ...rest] = myFriends;
