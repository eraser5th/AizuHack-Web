function test(f) {
  console.log([1, 2, 3, 4, 5], '=> 期待される値:', 1,'結果:', f([1, 2, 3, 4, 5]))
  console.log([3, 10, -5], '=> 期待される値:', -5, '結果:', f([3, 10, -5]))
  console.log([1], '=> 期待される値:', 1, '結果:', f([1]))
}

function ArrayMinFunc(a) {
  let min = a[0]

  for (let i = 1; i < a.length; i = i+1) {
    if (a[i] < min) {
      min = a[i]
    }
  }

  return min
}

test(ArrayMinFunc)