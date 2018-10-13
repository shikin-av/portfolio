import { Router } from 'express'
import getUsersApi from './users'
import getWorksApi from './works'

export default () => {
    const api = Router()

    api.all('/', (req, res) => ({}))
    api.use('/users', getUsersApi())
    api.use('/works', getWorksApi())

    return api
}
