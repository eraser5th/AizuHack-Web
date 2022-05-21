function test(f) {
  console.log([2, 3, 4, 5, 6, 7], "=> 期待される値:", [2, 3, 5, 7], ", 結果:", f([2, 3, 4, 5, 6, 7]))
  console.log([4, 8, 16, 32], "=> 期待される値:", [], ", 結果:", f([4, 8, 16, 32]))
  console.log([2, 11, 19, 23, 71], "=> 期待される値:", [2, 11, 19, 23, 71], ", 結果:", f([2, 11, 19, 23, 71]))
}

function ArrayPrimeFilter(a) {
  const primeInA = []
  for (let i = 0; i < a.length; i = i + 1) {
    let isPrimeFrag = true
    const ai = a[i]
    if (ai === 2) {
      primeInA.push(ai)
      continue
    }
    for (let j = 2; j < ai; j = j + 1) {
      if (ai % j === 0) {
        isPrimeFrag = false
        break
      }
    }
    if (isPrimeFrag) {
      primeInA.push(ai)
    }
  }
  return primeInA
}

test(ArrayprimeFilter)