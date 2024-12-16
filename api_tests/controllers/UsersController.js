const BaseController = require('./BaseController.js')

class UsersController extends BaseController {
    async getAllUsers() {
        return await this.axiosInstance.get('/users')

    }

    async getUserById(userId) {
        return await this.axiosInstance.get(`/users/${userId}`)
    }

    async createUser(newUser) {
        return await this.axiosInstance.post('/users', newUser)
    }

    async updateUserAddress(userId, address) {
        return await this.axiosInstance.patch(`/users/${userId}`, { address })
    }

    async updateUserCompany(userId, company) {
        return await this.axiosInstance.patch(`/users/${userId}`, { company })
    }

}

module.exports = new UsersController();