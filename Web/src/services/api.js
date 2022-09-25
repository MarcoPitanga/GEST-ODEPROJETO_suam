import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

export const api = axios.create({
  baseURL: baseUrl
})

export const fetcher = (url) => axios.get(baseUrl + url).then((res) => res.data)
