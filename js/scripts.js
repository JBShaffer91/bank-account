// Business Logic
// BankAccount Constructor

function BankAccount() {
  this.balance = 0;
}

// BankAccount Prototype

BankAccount.prototype = {
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};

BankAccount.prototype.getBalance = function() {
  return this.balance;
}

// User Interface Logic
// Create a new BankAccount object

let myBankAccount = new BankAccount(0);
document.getElementById("balance").textContent = document.getElementById("bankForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let depositAmount = Number(document.getElementById("deposit").value);
  let withdrawAmount = Number(document.getElementById("withdrawal").value);

  if (depositAmount) {
    myBankAccount.deposit(depositAmount);
  }

  if (withdrawAmount) {
    myBankAccount.withdraw(withdrawAmount);
  }

  document.getElementById("balance").textContent = myBankAccount.getBalance();
}); 
