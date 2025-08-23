// 입출금 관리만 하는 Class로 활용

export default class BankAccount {
  #balance = 0;
  #maxWithdraw = 100000000;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#maxWithdraw) {
      Swal.fire({
        title: "앗!",
        text: `1회 출금 한도(${this.#maxWithdraw})를 초과했습니다.`,
        icon: "error",
        confirmButtonText: "확인",
      });
      throw new Error(`1회 출금 한도(${this.#maxWithdraw})를 초과했습니다.`);
    }
    if (amount > this.#balance) {
      alert("잔액이 부족합니다.");
      throw new Error("잔액이 부족합니다.");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}
