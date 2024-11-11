// Завдання 2
// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

let subject1 = 25
let subject2 = 15

function checkAge(age){
    if(age>=18){
        return true
    }else{
        return false
    }
}
console.log(`Is ${subject1} an adult?`, checkAge(subject1))
console.log(`Is ${subject2} an adult?`, checkAge(subject2))

