function test(f) {
  console.log([0, 1, 2], '=> 期待される値:', [0, 2, 6], '結果:', f([0, 1, 2]))
  console.log([-4, -3, -2], '=> 期待される値:', [-4, -6, -6], '結果:', f([-4, -3, -2]))
  console.log([3, 3, 3, 3, 3], '=> 期待される値:', [3, 6, 9, 12, 15], '結果:', f([3, 3, 3, 3, 3]))
}

test((a) => a.map((v, i) => v * (i + 1)))