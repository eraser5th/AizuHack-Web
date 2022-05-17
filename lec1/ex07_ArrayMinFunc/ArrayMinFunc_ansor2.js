function test(f) {
  console.log([1, 2, 3, 4, 5], '=> 期待される値:', 1,'結果:', f([1, 2, 3, 4, 5]))
  console.log([3, 10, -5], '=> 期待される値:', -5, '結果:', f([3, 10, -5]))
  console.log([1], '=> 期待される値:', 1, '結果:', f([1]))
}

function min(x, y) {
  if (x < y) return x
  return y
}

function ArrayMinFunc(a) {
  return a.reduce(min)
}

test(ArrayMinFunc)