let cash = parseInt(prompt("Please use the cash"));
const denominations = [25, 10, 5, 1];
const result = [];

for (let i = 0; i <= denominations.length; i++) {
  while (cash >= denominations[i]) {
    result.push(denominations[i]);
    cash -= denominations[i];
  }
}

console.log(result);
