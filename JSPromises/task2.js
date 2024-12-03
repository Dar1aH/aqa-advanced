// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом --> 

// <https://jsonplaceholder.typicode.com/todos/1>

// Функція повинна повертати як результат Promise що повертає об’єкт todo

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом --> 

// <https://jsonplaceholder.typicode.com/users/1>

// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних


async function fetchData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Invalid endpoint: ${response.statusText}`)
    }
    const data = await response.json()
    console.log(data)
    return data

}

function fetchToDo() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    return fetchData(url)
}

function fetchUser() {
    const url = "https://jsonplaceholder.typicode.com/users/1"
    return fetchData(url)

}

Promise.all([fetchToDo(), fetchUser()])
    .then(([todo, user]) => {
        console.log("Results from Promise.all:")
        console.log("Todo:", todo)
        console.log("User:", user)
    })
    .catch((error) => {
        console.error("Error with Promise.all:", error.message)

    })

Promise.race([fetchToDo(), fetchUser()])
    .then((result) => {
        console.log("First completed promise result (Promise.race):", result)
    })
    .catch((error) => {
        console.error("Error with Promise.race:", error.message)
    })
