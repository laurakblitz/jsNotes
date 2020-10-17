let x = 5;
let y = (z) => {
    return z*z
}

let result = y(5)
let func_name = y
// let func_name = (z) => {
//    return z*z
// }

console.log(result)
console.log(func_name)

let my_callback = (f) => {
// f is == console.log
    f("Hello World")
}

my_callback(console.log)

let function demo(name) {
    return `My name is ${name}`
}
let string_first_letter = demo("Justin")[0];
console.log(string_first_letter)