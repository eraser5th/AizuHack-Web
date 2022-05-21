/*
  この様にソートの比較部分を関数で受け取ることにより、
  一つのソート関数でも様々なデータを様々な順番に入れ替えることができる。
*/
function sort(data, compare) {
  const dataCopy = [...data]

  for (let i = 0; i < dataCopy.length; i = i + 1) {
    for (let j = 0; j < i; j = j + 1) {
      if (compare(dataCopy[i], dataCopy[j])) {
        const tmp = dataCopy[i]
        dataCopy[i] = dataCopy[j]
        dataCopy[j] = tmp
      }
    }
  }

  return dataCopy
}



const numbers = [-1, 2, -5, -8, 4]

// 小さい順
console.log(sort(numbers, (a, b) => {
  return a < b
}))

// 大さい順
console.log(sort(numbers, (a, b) => {
  return a > b
}))



const menters = [
  { name: "ERASER", id: 5 },
  { name: "matumoto", id: 2 },
  { name: "suzu", id: 7 },
  { name: "shinbunbun", id: 10 },
  { name: "sou7", id: 1 },
  { name: "jumango", id: 8 },
  { name: "kyo", id: 3 },
  { name: "yuurai", id: 4 },
]

// idの小さい順
console.log(sort(menters, (a, b) => {
  return a.id < b.id
}))

// idの大さい順
console.log(sort(menters, (a, b) => {
  return a.id > b.id
}))

// 名前の辞書順
console.log(sort(menters, (a, b) => {
  return a.name < b.name
}))

// 名前の逆辞書順
console.log(sort(menters, (a, b) => {
  return a.name > b.name
}))
