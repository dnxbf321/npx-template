import '../css/_test.css'

console.log(client.publicPath)

let arr = [1, 2, 3]
let copyArr = [...arr]
console.log(copyArr)

let filed = {
  a: 1,
  b: 2
}
let obj = {
  ...filed
}
console.log(obj)
