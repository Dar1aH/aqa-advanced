// 4.1 --> π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const radiusOfCircle = 3
let areaOfCircle = Math.PI * radiusOfCircle ** 2

console.log('Area of circle =', areaOfCircle.toFixed())



// 4.2 --> Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

const length = 10
const width = 8
let areaOfRectangle = length * width 

console.log('Area of Rectangle=', areaOfRectangle.toFixed())


// 4.3 --> Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки


const radiusOfCylinder = 10
const cylinderHeight = 5
let volumeOfCylinder = Math.PI * radiusOfCylinder ** 2 * cylinderHeight

console.log('Volume Of Cylinder =', volumeOfCylinder.toFixed(2))
