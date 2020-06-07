import axios from 'axios'

const item = window.localStorage.getItem('token')
const token = item ? JSON.parse(item) : null

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {Authorization: `Token ${token}`},
})

// Since we will only be using JSON APIs, add Content-Type: application/json to header as default
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
axiosInstance.defaults.headers.put['Content-Type'] = 'application/json'
axiosInstance.defaults.headers.patch['Content-Type'] = 'application/json'

// Since we will only be using JSON APIs, add Accept: application/json to header as default
axiosInstance.defaults.headers.get.Accept = 'application/json'
axiosInstance.defaults.headers.post.Accept = 'application/json'
axiosInstance.defaults.headers.put.Accept = 'application/json'
axiosInstance.defaults.headers.patch.Accept = 'application/json'

export default axiosInstance
