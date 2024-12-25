//  Function in typescript

// Normal Function
// Arrow Function

// Normal Function
// default value 20
function add(num1: number, num2: number = 20): number {
  return num1 + num2;
}

// Arrow Function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

const poorUser: {
  name: string;
  balance: number;
  addBalance: (balance: number) => string;
} = {
  name: "Joy",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [11, 25, 255];

const newArr: number[] = arr.map((elem: number): number => elem * elem);
