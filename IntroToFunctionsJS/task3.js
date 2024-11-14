// Завдання 3
// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

const checkOrder = (availableItems, orderedItems) => {
    if(availableItems < orderedItems){
        return 'Your order is too large, we do not have enough goods:('
    }
    else if(orderedItems === 0){
        return 'Your order is empty:('
    }
    else{
        return 'Your order is accepted!'
    }
}
console.log(checkOrder(100, 5))
console.log(checkOrder(34, 200))
console.log(checkOrder(35, 0))