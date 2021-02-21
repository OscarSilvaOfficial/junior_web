import axios from 'axios'
import { Base64 } from 'js-base64';

axios.defaults.headers.common['Authorization'] = `Basic ${Base64.encode('admin:admin')}`

console.log(axios.defaults.headers.common)

const base = axios.create({
  baseURL: 'http://localhost:8000/'
})

export { base }