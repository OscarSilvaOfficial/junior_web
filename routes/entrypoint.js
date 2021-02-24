import axios from 'axios'
import { Base64 } from 'js-base64';

axios.defaults.headers.common['Authorization'] = `Basic ${Base64.encode('admin:admin')}`

const DEBUG = process.env.DEBUG

const baseURL = DEBUG == 'True' ? 'http://localhost:8000/':'https://junior-api.herokuapp.com/'

console.log(baseURL)

const base = axios.create({
  baseURL: baseURL
})


export { base }