const a = [2, 8, 0, -1, 7]


let min = a[0]

for (let i = 0; i < a.length; i = i + 1) {
  if (a[i] < min) {
    min = a[i]
  }
}

console.log(min)