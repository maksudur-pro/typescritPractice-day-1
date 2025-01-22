{
  // Encapsulation in OOP

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

    public addDeposit(amount: number) {
      if (amount < 300) {
        console.log("minimum deposit 300 tk");
      } else {
        this._balance = this._balance + amount;
      }
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance;
    }
  }

  //   class StudentAccount extends BankAccount {
  //     test(){
  //         this.
  //     }
  //   }

  const goribManusherAccount = new BankAccount(1, "Mr. gorib", 200);
  goribManusherAccount.getHiddenMethod();
  const myBalance = goribManusherAccount.getHiddenMethod();
  console.log(goribManusherAccount, myBalance);

  //
}
