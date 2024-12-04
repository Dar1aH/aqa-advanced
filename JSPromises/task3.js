// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити    

async function fetchData(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Invalid endpoint: ${response.statusText}`)
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(`Error fetching data from ${url}:`, error.message)
        throw error
    }
}

async function fetchToDo() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    return await fetchData(url)
}

async function fetchUser() {
    const url = "https://jsonplaceholder.typicode.com/users/1"
    return await fetchData(url)
}

async function handlePromises() {
    try {
        const [todo, user] = await Promise.all([fetchToDo(), fetchUser()])
        console.log("Results from Promise.all:")
        console.log("Todo:", todo)
        console.log("User:", user)
    } catch (error) {
        console.error("Error with Promise.all:", error.message)
    }

    try {
        const result = await Promise.race([fetchToDo(), fetchUser()])
        console.log("First completed promise result (Promise.race):", result)
    } catch (error) {
        console.error("Error with Promise.race:", error.message)
    }
}
handlePromises()
