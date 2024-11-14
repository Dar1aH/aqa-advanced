// Завдання 3: Генерація таблиці множення
// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .
// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.


const number ={
    1: 6,
    2: 7,
    3: 8,
    4: 9
}
let i = 1
let result = ''

console.log(`Multiplication table for ${number[1]}:\n`)

for(i; i<=10; i++){
    result += (`${number[1]} * ${i} = ${number[1] * i}`)
    result +='\n'
}
console.log(result)

result = ''

console.log(`\nMultiplication table for ${number[2]}:\n`)

for(i = 1; i<=10; i++){
    result += (`${number[2]} * ${i} = ${number[2] * i}`)
    result +='\n'
}
console.log(result)

result = ''
console.log(`\nMultiplication table for ${number[3]}:\n`)

i = 1
while(i<=10){
    result += (`${number[3]} * ${i} = ${number[3] * i}\n`)
    i++
}

console.log(result)

result = ''
console.log(`\nMultiplication table for ${number[4]}:\n`)

i = 1
while(i<=10){
    result += (`${number[4]} * ${i} = ${number[4] * i}\n`)
    i++
}
console.log(result)

