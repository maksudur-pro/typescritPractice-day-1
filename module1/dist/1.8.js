"use strict";
{
    // Destructuring in typescript
    const user = {
        id: 1484,
        name: {
            firstName: "Maksudur",
            middleName: "Rahman",
            lastName: "Joy",
        },
        contactNo: "01721308663",
        address: "Uganda",
    };
    const { contactNo, name: { middleName }, } = user;
    // array destructuring
    const myFriends = ["saif", "radil", "hamja", "trony", "fahim", "raju"];
    const [, , bestfriend, ...rest] = myFriends;
}
