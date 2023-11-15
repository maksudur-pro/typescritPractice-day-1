{
  //

  // Encapsulation --> private protected area

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

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }
    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManushAccount = new BankAccount(11, "Mr. Joy", 20);
  goribManushAccount.addDeposit(30);
  const my_balance = goribManushAccount.getHiddenMethod();
  console.log(my_balance);

  //
}
