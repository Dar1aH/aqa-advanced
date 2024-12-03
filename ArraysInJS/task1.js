// Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел

// Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.

// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, 
// негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
// Приклад виводу на консоль:
// Кількість позитивних чисел: 3
// Кількість негативних чисел: 2
// Кількість нульових чисел: 2

// Ваша програма повинна коректно підрахувати та вивести кількість позитивних, негативних та нульових чисел в заданому масиві.

/*
const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
const positiveCount = numbers.filter((number) => number > 0).length
const negativeCount = numbers.filter((number) => number < 0).length
const zeroCount = numbers.filter((number) => number == 0).length

console.log(`Кількість позитивних чисел:${positiveCount}`)
console.log(`Кількість негативних чисел:${negativeCount}`)
console.log(`Кількість нульових чисел:${zeroCount}`)
*/

const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveCount = 0
let negativeCount = 0
let zeroCount = 0
for (const number of numbers) {
    if (number > 0) {
        positiveCount++
    } else if (number < 0) {
        negativeCount++
    } else {
        zeroCount++
    }
}
console.log(`Кількість позитивних чисел:${positiveCount}`)
console.log(`Кількість негативних чисел:${negativeCount}`)
console.log(`Кількість нульових чисел:${zeroCount}`)