class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#balance += amount;
    this.#processDeposit(amount);
  }

  withdraw(amount) {
    if (amount < this.balance) {
      this.#balance -= amount;
      this.#processWithdraw(amount);
    } else {
      console.log('Insufficient funds');
    }
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: 'deposit',
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: 'withdraw',
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();

wallet.deposit(300);
wallet.withdraw(250);
// not able to access private class fields
// wallet.#processWithdraw(50);
// console.log(wallet.#balance);

console.log(wallet.balance);
console.log(wallet.transactions);
