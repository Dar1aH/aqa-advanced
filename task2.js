// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, 
// який містить вітання для обох осіб. Виведіть результат в консоль. 
// Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

const name1 = 'Mary'
const name2 = 'Andrew'
let greeting = 'Happy anniversary' + ' ' + name1 + ' ' + 'and' + ' ' + name2 + '!'
let greetingTemplate = `Happy anniversary ${name1} and ${name2}!`

console.log(greeting)
console.log(greetingTemplate)
