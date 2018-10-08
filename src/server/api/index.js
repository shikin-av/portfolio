import { Router } from 'express'
import getUsersApi from './users'
import getTextsApi from './texts'

export default () => {
    const api = Router()

    api.all('/', (req, res) => ({}))
    api.use('/users', getUsersApi())
    api.use('/texts', getTextsApi())

    return api
}
