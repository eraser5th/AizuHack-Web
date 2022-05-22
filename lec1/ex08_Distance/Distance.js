function test(f) {
  console.log(
    {x: 1, y: 2}, {x: 2, y: 2},
    '=> 期待する値:', Math.sqrt(1),
    '結果:',
    f({x: 1, y: 2}, {x: 2, y: 2})
  )
  console.log(
    {x: 1, y: 9}, {x: -4, y: 2},
    '=> 期待する値:', Math.sqrt(74),
    '結果:',
    f({x: 1, y: 9}, {x: -4, y: 2})
  )
  console.log(
    {x: 10, y: -4}, {x: -9, y: 0},
    '=> 期待する値:', Math.sqrt(377),
    '結果:',
    f({x: 10, y: -4}, {x: -9, y: 0})
  )
}

// この下に関数を作成

test(/* 作成した関数を渡す */)
