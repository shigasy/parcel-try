// allow関数とfunction関数が定義するthisの違い

// this.data = 1
// const allow = () => {
//   console.log({allow: this.data}) // 宣言時のレシーバであるオブジェクトをthisとして定義
// };
// function func() {
//   console.log({func: this.data}) // 実行時のレシーバであるオブジェクトをthisとして定義
// }
// allow() // 1
// func() // undefined

// const a = {
//   data: 2,
//   execute: allow // 宣言時であるため、aのオブジェクトではなく、globalのdata
// }
// const f = {
//   data: 2,
//   execute: func // fのオブジェクト内をthisとして指す
// }
// a.execute() // 1
// f.execute() // 2
const func = () => {
  return 1 + 2 + 3
}
export default func