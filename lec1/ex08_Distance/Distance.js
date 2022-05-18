function test(f) {
  console.log(
    {x: 1, y: 2}, {x: 2, y: 2},
    '=> 期待する値:', Math.sqrt(3),
    '結果:',
    f({x: 1, y: 2}, {x: 2, y: 2})
  )
  console.log(
    {x: 1, y: 9}, {x: -4, y: 2},
    '=> 期待する値:', Math.sqrt(3),
    '結果:',
    f({x: 1, y: 2}, {x: 2, y: 2})
  )
  console.log(
    {x: 1, y: 2}, {x: 2, y: 2},
    '=> 期待する値:', Math.sqrt(3),
    '結果:',
    f({x: 1, y: 2}, {x: 2, y: 2})
  )
}

// この下に関数を作成

test(/* 作成した関数を渡す */)