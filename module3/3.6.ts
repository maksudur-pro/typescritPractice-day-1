{
  //

  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    // setter

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter

    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManushAccount = new BankAccount(11, "Mr. Joy", 20);
  //   goribManushAccount.addDeposit(30); // function call korte hocche
  goribManushAccount.deposit = 30;
  //  const my_balance = goribManushAccount.getBalance(); // function call korte hocche
  const myBalance = goribManushAccount.balance; // property er moto kore
  console.log(myBalance);

  //
}
