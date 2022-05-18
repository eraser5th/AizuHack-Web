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
function Distance(p1, p2) {
  const XDistance = p1.x - p2.x
  const YDistance = p1.y - p2.y
  return Math.sqrt(XDistance * XDistance + YDistance * YDistance)
}

test(Distance)