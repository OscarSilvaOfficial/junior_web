import axios from 'axios'
import { Base64 } from 'js-base64';

const USER = process.env.authUser
const PASS = process.env.authPass

axios.defaults.headers.common['Authorization'] = `Basic ${Base64.encode(`${USER}:${PASS}`)}`

const base = axios.create({
  baseURL: process.env.baseUrl
})


export { base }