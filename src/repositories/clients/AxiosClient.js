import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
