// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

//Function declaration

function calculateAreaOfRectangle1(width, height){
    const result = width * height
    return result
}
console.log(calculateAreaOfRectangle1(4, 5))


//Function expression

const calculateAreaOfRectangle2 = function(width, height){
    const result = width * height
    return result
}
console.log(calculateAreaOfRectangle2(5, 7))

//Arrow function

const calculateAreaOfRectangle3 = (width, height) => width * height
console.log(calculateAreaOfRectangle3(8, 3))