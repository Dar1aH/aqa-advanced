const axios = require('axios')


class BaseController {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            validateStatus: function (status) {
                return true
            }
        })

        this.axiosInstance.interceptors.request.use(
            (request) => {
                console.log('Request:', {
                    url: request.url,
                    method: request.method,
                    data: request.data,
                    headers: request.headers,
                });
                return request;
            },
            (error) => {
                console.error('Request Error:', error)
                return Promise.reject(error)
            }
        )

        this.axiosInstance.interceptors.response.use(
            (response) => {
                console.log('Response', {
                    url: response.config.url,
                    method: response.config.method,
                    status: response.status,
                    data: response.data
                })
                return response;
            },
            (error) => {
                console.error('Response Error:', error)
                return Promise.reject(error)

            }
        )

    }
}

module.exports = BaseController;
