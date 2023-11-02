// Learning function

// Normal function
// Array function

// Normal

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(22, 33);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function ---> method

const poorUser = {
  name: "joy",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance: ${this.balance + balance}`;
  },
};

const arr: number[] = [12, 23, 43];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
