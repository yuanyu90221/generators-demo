function *factorial(n){
  // your code here
  let result = 1;
  for (let i=1; i <=n ;i++) {
    result *= i;
    yield result;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120 