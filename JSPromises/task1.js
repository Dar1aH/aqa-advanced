// Завдання 1

// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function delayedConsoleLog(text, delay) {
    setTimeout(() => {
        console.log(text)
    }, delay)
}
delayedConsoleLog("Good morning", 3000)
