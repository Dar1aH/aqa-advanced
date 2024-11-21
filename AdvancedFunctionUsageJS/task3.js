// Завдання 3

// 1. Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає 
// як результат виконання число отримане від ділення.
// 2. У функції треба поділити numerator на denominator і повернути результат.
// 3. Додайте валідацію в функції. У разі,
//     a. якщо denominator дорівнює 0
//     b. або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// 4. Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, 
// коли denominator дорівнює 0 або один з аргументів не є числом.

// 5. Огорніть кожен окремий виклик функції divide в try…catch.
// Використовуючи блок finally, виведіть повідомлення "Робота завершена"
// в консоль, навіть якщо помилка виникла або не виникла.



function divide(numerator, denominator) {
    if (denominator == 0 || typeof denominator !== 'number' || typeof numerator !== 'number') {
        throw new Error('Hеправильно введені дані!')

    }
    return numerator / denominator
}

try {
    console.log(divide(6, 3))
}
catch (error) {
    console.error(error.message)
}
finally {
    console.log('Робота завершена')
}

try {
    console.log(divide(0, null))
}
catch (error) {
    console.error(error.message)
}
finally {
    console.log('Робота завершена')
}

try {
    console.log(divide(0, undefined))
}
catch (error) {
    console.error(error.message)
}
finally {
    console.log('Робота завершена')
}

try {
    console.log(divide(5, 3))
}
catch (error) {
    console.error(error.message)
}
finally {
    console.log('Робота завершена')
}

try {
    console.log(divide(10, 0))
}
catch (error) {
    console.error(error.message)
}
finally {
    console.log('Робота завершена')
}