import { Router } from 'express'
import usersApi from './users'
import worksApi from './works'

export default () => {
    const api = Router()

    api.all('/', (req, res) => ({}))
    api.use('/users', usersApi())
    api.use('/works', worksApi())

    return api
}
