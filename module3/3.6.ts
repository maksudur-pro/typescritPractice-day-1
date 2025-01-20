{
  // Getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter

    set deposit(amount: number) {
      if (amount < 300) {
        console.log("minimum deposit 300 tk");
      } else {
        this._balance = this._balance + amount;
      }
    }

    // public addDeposit(amount: number) {
    // }

    // getter

    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(1, "Mr. gorib", 250);
  //   goribManusherAccount.addDeposit(200); // function call korte hocche
  //   const myBalance = goribManusherAccount.getBalance(); // function call korte hocche
  goribManusherAccount.deposit = 350;
  const myBalance = goribManusherAccount.balance; // property er moto kore

  console.log(goribManusherAccount, myBalance);

  //
}
