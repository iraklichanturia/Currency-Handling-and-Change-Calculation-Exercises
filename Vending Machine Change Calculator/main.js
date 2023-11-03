let userCoin = parseInt(prompt("Please enter your coin for this operation"));
const coin = [25, 10, 5, 1];
const result = [];

for (let i = 0; i <= coin.length; i++) {
  while (userCoin >= coin[i]) {
    result.push(coin[i]);
    userCoin -= coin[i];
  }
}

console.log(result);
