function test(f) {
  console.log('(1, 2) => 期待される値: 1, 結果: ' + f(1, 2))
  console.log('(9, -5) => 期待される値: -5, 結果: ' + f(9, -5))
  console.log('(3, 18) => 期待される値: 3, 結果: ' + f(3, 18))
  console.log('(-12, -6) => 期待される値: -12, 結果: ' + f(-12, -6))
}

function MinFunc(a, b) {
  if (a < b) return a
  return b
}

test(MinFunc)