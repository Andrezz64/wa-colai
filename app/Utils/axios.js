const { default: axios } = require("axios");
const baseURL = "http://localhost:5050"

const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export default instance;