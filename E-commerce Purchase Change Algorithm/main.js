let input = Number(prompt("Enter amount"));
let denominations = [50, 20, 10, 5, 1, 0.25, 0.1, 0.05];
let result = [];
for (let i = 0; i <= denominations.length; i++) {
  while (input >= denominations[i]) {
    result.push(denominations[i]);
    input -= denominations[i];
  }
}

console.log(result);
