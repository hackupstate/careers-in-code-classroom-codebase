let balance = 10;

const withdraw = (amount) => {
	if (amount > balance) {
		return "you broke. you only have $" + balance;
	} else {
		balance = balance - amount;
		return balance;
	}
};
console.log(withdraw(1));
console.log(withdraw(3));
console.log(withdraw(2));

for (let i = 1; balance > 1; i++) {
	console.log(withdraw(i));
}
