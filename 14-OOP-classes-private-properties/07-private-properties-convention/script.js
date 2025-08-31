class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._balance += amount;
    this._processDeposit(amount);
  }

  withdraw(amount) {
    if (amount < this.balance) {
      this._balance -= amount;
      this._processWithdraw(amount);
    } else {
      console.log('Insufficient funds');
    }
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this._transactions.push({
      type: 'deposit',
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this._transactions.push({
      type: 'withdraw',
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();

wallet.deposit(300);
wallet.withdraw(250);

console.log(wallet.balance);
console.log(wallet.transactions);
