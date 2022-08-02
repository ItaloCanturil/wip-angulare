import client from './clients/AxiosClient'

const resource = '/'

export default {
  getAll () {
    return client.get(resource)
  },
  getById (id) {
    return client.get(`${resource}${id}`)
  },
  createPost (body) {
    return client.post(
      resource,
      body,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    )
  },
  editPost (body, id) {
    return client.put(
      `${resource}${id}`,
      body,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    )
  },
  deletePost (id) {
    return client.delete(`${resource}${id}`)
  }
}
