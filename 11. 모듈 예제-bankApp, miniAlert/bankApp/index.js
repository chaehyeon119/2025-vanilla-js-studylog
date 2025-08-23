import BankAccount from "./BankAccount.js";

const bankAccount = new BankAccount(loadBalance());

// DOM
const amountInput = document.getElementById("amount-input");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const balanceValue = document.getElementById("balance-value");
const log = document.getElementById("log");

updateBalance();

// // Event
// // 입금
// depositBtn.addEventListener("click", () => {
//   const amount = +amountInput.value;
//   bankAccount.deposit(amount);
//   updateBalance();
//   addLog(`${amount.toLocaleString()}원 입금`);
//   amountInput.value = "";
// });

// // Event
// // 출금
// withdrawBtn.addEventListener("click", () => {
//   const amount = +amountInput.value;
//   bankAccount.withdraw(amount);
//   updateBalance();
//   addLog(`-${amount.toLocaleString()}원 출금`);
//   amountInput.value = "";
// });

depositBtn.addEventListener("click", () => {
  handleTransaction("deposit");
});

withdrawBtn.addEventListener("click", () => {
  handleTransaction("withdraw");
});

// Event
// 입금+출금
function handleTransaction(type) {
  const amount = +amountInput.value;
  if (type === "deposit") {
    // 입금
    bankAccount.deposit(amount);
    addLog(`${amount.toLocaleString()}원 입금`);
  } else if (type === "withdraw") {
    // 출금
    bankAccount.withdraw(amount);
    addLog(`${amount.toLocaleString()}원 출금`);
  }
  updateBalance();
  amountInput.value = "";
}

// localStorage에 저장
function saveBalance(amount) {
  localStorage.setItem("myBalance", amount);
}

// 잔액 조회
function loadBalance() {
  // myBalance가 문자열이므로 숫자열로 바꾸는 작업 필요
  return localStorage.getItem("myBalance") * 1;
}

// 잔액 업데이트
function updateBalance() {
  const amount = bankAccount.getBalance();
  balanceValue.textContent = amount.toLocaleString();
  saveBalance(amount);
}

// 입출금 내역 출력
function addLog(text) {
  const li = document.createElement("li");
  const now = new Date();
  const time = now.toLocaleTimeString();
  li.textContent = `[${time}] ${text}`;
  log.appendChild(li);
}
