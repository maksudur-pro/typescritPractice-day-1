"use strict";
{
    //Spread operator
    //rest operator
    //destructure
    // learn spread operator
    const bros1 = ["saif", "radil", "hamja"];
    const bros2 = ["trony", "fahim", "raju"];
    bros1.push(...bros2); // spread operator (...)
    const mentors1 = {
        typescript: "Joy",
        redux: "Maksudur",
        dbms: "Rahman",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator
    //   const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    //   };
    //   greetFriends("abul", "kuddus", "bulbul", "ubul");
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("abul", "kuddus", "bulbul", "ubul");
}
