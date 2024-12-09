// Завдання 2
// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

let person1 = 25;
let person2 = 15;

function isPersonAdult(age) {
	return age >= 18;
}
console.log(`Is ${person1} an adult?`, isSubjectAdult(person1));
console.log(`Is ${person2} an adult?`, isSubjectAdult(person2));
