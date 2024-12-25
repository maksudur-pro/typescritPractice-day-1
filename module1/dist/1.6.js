"use strict";
//  Function in typescript
// Normal Function
// Arrow Function
// Normal Function
// default value 20
function add(num1, num2 = 20) {
    return num1 + num2;
}
// Arrow Function
const addArrow = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: "Joy",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    },
};
const arr = [11, 25, 255];
const newArr = arr.map((elem) => elem * elem);
