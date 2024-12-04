// Завдання 4 (Опціонально)

// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

class GettingData {
    async fetchData(url) {
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

}

class HandlingData extends GettingData {
    async fetchToDo() {
        const url = "https://jsonplaceholder.typicode.com/todos/1"
        return await this.fetchData(url)
    }
    
    async fetchUser() {
        const url = "https://jsonplaceholder.typicode.com/users/1"
        return await this.fetchData(url)
    }
    
    async handlePromises() {
        try {
            const [todo, user] = await Promise.all([this.fetchToDo(),this.fetchUser()])
            console.log("Results from Promise.all:")
            console.log("Todo:", todo)
            console.log("User:", user)
        } catch (error) {
            console.error("Error with Promise.all:", error.message)
        }
    
        try {
            const result = await Promise.race([this.fetchToDo(), this.fetchUser()])
            console.log("First completed promise result (Promise.race):", result)
        } catch (error) {
            console.error("Error with Promise.race:", error.message)
        }
    }
}

const handlingDataInstance = new HandlingData()
handlingDataInstance.handlePromises()

