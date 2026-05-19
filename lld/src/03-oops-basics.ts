class BankAccount {
  private balance: number = 0;
  private readonly accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  private interestRate: number = 0.05;

  addInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }
}

const account = new SavingsAccount("ACC123");
account.deposit(1000);
account.addInterest();
console.log(account.getBalance());