// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
	{ name: 'John', age: 30, email: 'john@gmail.com' },
	{ name: 'Jane', age: 25, email: 'jane@gmail.com' },
	{ name: 'Mike', age: 40, email: 'mike@gmail.com' },
];

for (const { name, age, email } of users) {
	console.log(` ${name} is ${age} years old and the email is ${email}`);
}
