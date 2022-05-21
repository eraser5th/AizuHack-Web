function test(f) {
  console.log([2, 3, 4, 5, 6, 7], "=> 期待される値:", [2, 3, 5, 7], ", 結果:", f([2, 3, 4, 5, 6, 7]))
  console.log([4, 8, 16, 32], "=> 期待される値:", [], ", 結果:", f([4, 8, 16, 32]))
  console.log([2, 11, 19, 23, 71], "=> 期待される値:", [2, 11, 19, 23, 71], ", 結果:", f([2, 11, 19, 23, 71]))
}

function isPrime(n) {
  if (n === 2) true
  for (let i = 2; i < n; i = i + 1) {
    if (n % i === 0) return false
  }
  return true
}

function ArrayPrimeFilter(a) {
  const primeInA = []
  for (let i = 0; i < a.length; i = i + 1) {
    if (isPrime(a[i])) {
      primeInA.push(a[i])
    }
  }
  return primeInA
}
test(ArrayPrimeFilter)