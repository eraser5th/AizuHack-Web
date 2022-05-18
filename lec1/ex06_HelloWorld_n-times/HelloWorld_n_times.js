function test(f) {
  console.log(1)
  f(1)
  console.log(4)
  f(4)
  console.log(10)
  f(10)
}

function HelloWorld_n_times(n) {
  for (let i = 0; i < n; i = i + 1) {
    console.log('Hello World!')
  }
}

test(HelloWorld_n_times)