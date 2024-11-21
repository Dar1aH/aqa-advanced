// Завдання 5: Об'єднання масивів

// Вам потрібно створити програму, яка об'єднає два масиви в один

// Ось кроки, які вам потрібно виконати:

// Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
// Створіть новий масив, який містить всі елементи з обох вихідних масивів.
// Виведіть отриманий об'єднаний масив на консоль.


const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const secondArray = [10, 20, 30, 40, 50]

//Using concat method
const jointArray1 = firstArray.concat(secondArray)

//Using the spread operator 
const jointArray2 = [...firstArray, ...secondArray]

//Using array.prototype.push
firstArray.push(...secondArray)

console.log(jointArray1)
console.log(jointArray2)
console.log(firstArray)