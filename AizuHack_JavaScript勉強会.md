---
title: AizuHack JavaScript勉強会
slideOptions:
  theme: blood
  transition: 'fade'
---

# AizuHack
# ~ JavaScript勉強会 ~

---

## はじめに

----

### この資料の表記について

`このような`見た目になっているものは、ターミナルのコマンドまたはプログラムで使うワードです。

----

### 今回の作業について

大学のWSにsshで接続しよう。
nodeを立ち上げよう。

- ターミナルで`node`を実行
- 今回の内容を自分でも逐次試していこう

---

## 変数・定数

プログラミングにおいて、値を一時的に保存する箱のようなもの。
値を何回でも入れ直せる`let`と、値を1回入れると変更できない`const`の２種類を使う。前者を変数、後者を定数と呼ぶ。

:::danger
変数にはvarもありますが、基本的に使わないでください
:::

`node`で試してみよう

```javascript=
let a = 1
console.log(a)
a = 2
console.log(a)

const b = 3
console.log(b)
b = 4
console.log(b)
```

---

## 四則演算

足し算、引き算、掛け算、割り算のこと。

JavaScriptでは`+`, `-`, `*`, `/`で表現する。割り算のあまりは`%`

`node`で試してみよう

```javascript=
1 + 2 // => 3
4 - 3 // => 1
2 * 3 // => 6
6 / 2 // => 3
5 % 2 // => 1
```

---

## 基礎的なデータ型

JavaScriptが扱う値にはいくつか種類（型）がある

----

### number

数を扱う型

```javascript=
const one = 1
```

----

### string

文字列を扱う型
シングルクォーテーション(`'`)かダブルクォーテーション(`"`)で囲む。

```javascript=
const str = "Hello, World!"
```

----

### boolean

真偽値を扱う型。`true`と`false`のみ

```javascript=
let bool = true
console.log(bool)
bool = false
console.log(bool)
```

----

### array（配列）

プログラミングにおいてリストを扱うための概念

```javascript=
const animals = ["dog", "cat", "bird"]

animals[0] // => dog
animals[1] // => cat
animals[2] // => bird
animals.length // => 3

console.log(animals) // ["dog", "cat", "bird"]
animals.push("pig")
console.log(animals) // ["dog", "cat", "bird", "pig"]
animals.length // => 4
```

---

### object
関連のあるデータと機能の集合（MDNより引用）

```javascript=
const person = {
  name: "Yuta Tomiyama",
  nickname: "mayamito",
  id: "yt8492",
  age: 21,
  function greet() {
    console.log("I'm " + this.name)
  }
}

mayamito.name // => "Yuta Tomiyama"
mayamito.birthday = "20000119"
mayamito.birthday // => "20000119"
```

----

### JSON
データを文字列で表したもの
- `JSON.stringify`でJavaScriptの値をJSONの文字列に変換することができる。
- `JSON.parse`でJSONの文字列をJavaScriptの値に復元することができる

色々な値で試してみよう

```javascript=
const animalsJson = JSON.stringify(animals)
console.log(animalsJson)

const mayamitoJson = JSON.stringify(mayamito)
console.log(mayamitoJson)
```

---

## 値の比較
2つの値の代償関係や等しいかどうかを調べる。

- `===`
  - 等しい場合`true`、そうでない場合`false`
- `!==`
  - 等しくない場合`true`、そうでない場合`false`
- `<`
  - 左の値が右の値より小さい場合`true`、そうでない場合`false`
- `<=`
  - 左の値が右の値より小さいか等しい場合`true`、そうでない場合`false`
- `>`
  - 左の値が右の値より大きい場合`true`、そうでない場合`false`
- `>=`
  - 左の値が右の値より大きいか等しい場合`true`、そうでない場合`false`

---

## 条件分岐

あたいの比較などによって得られた真偽値によって処理の内容を変えたい場合、if文を使って処理を分岐させる。

```javascript=
const num = 0

if (num % 2 === 0) {
  console.log("numは偶数です")
} else if (num % 2 === 1) {
  console.log("numは奇数です")
} else {
  console.log("不明な値です")
}
```

---

## 繰り返し
同じ処理を繰り返したい場合、for文やwhile文を使う

----

### for文
```javascript=
for (初期化; 継続条件; 増分) {
  // 処理内容
}

// 例（0 ~ 100 までの総和を求める）
let sum = 0
for (let i = 0; i <= 100; i = i + 1) {
  sum = sum + i
}
console.log(sum)
```

----

### while文
```javascript=
while (継続条件) {
  // 処理内容
}

// 例（０ ~ 100までの総和を求める）
let sum = 0
let i = 0
for (i <= 100) {
  sum = sum + i
  i = i + 1
}
console.log(sum)
```

---

## 関数
処理をひとまとめにしたもの。`console.log`も関数。

```javascript=
function checkIsEven(n) {
  if (n % 2 === 0) {
    console.log(n + " is even.")
  }
  console.log(n + " is not even.")
}

checkIsEven(4)
checkIsEven(5)
```

`return`文により値を返すことができる。`return`文が実行されると関数の処理は終了する。

```javascript=
// 以下は数学における f(x) = x + 1 と同じ
function addOne(x) {
  return x + 1
}

addOne(2) // => 3
```

<style>
  /* slide preview */
  .reveal h1, .reveal h2,
  .reveal h3, .reveal h4,
  .reveal h5, .reveal h6,
  .reveal section,
  .reveal table,
  .reveal th, .reveal td,
  .reveal li,
  .reveal blockquote,
  .reveal p {
    color: #ddd;
    text-align: left;
    letter-spacing: normal;
    text-shadow: none;
    word-wrap: break-word;
  }
  .reveal h1,
  .reveal h2,
  .reveal h3,
  .reveal h4,
  .reveal h5,
  .reveal h6 {
    line-height: 1.4;
    font-size: 40px;
  }
  .reveal p, .reveal li {
    font-size: 24px;
  }
  
  /* codeblock */
  .reveal td.hljs-ln-numbers {
    width: 40px;
    text-align: right;
    padding: 0 12px;
    border-right-color: #888;
    border-right-width: 2px;
    border-right-style: solid;
  }
  .reveal td.hljs-ln-code {
    padding-left: 12px;
  }
  /* inlinecode */
  .reveal p code,
  .reveal li code {
    background-color: #383838;
    padding: 0 8px;
    border-radius: 4px;
  }
  /* list */
  .reveal ul {
    padding-left: 4px;
  }
  .reveal .alert.alert-danger {
    background-color: #A15684;
    color: #fff;
  }
  /* page preview */
</style>