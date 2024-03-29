import { Router } from 'express'
import _ from 'lodash'

import Work from '../models/Work'

export default () => {
    const api = Router()

    api.get('/works', async (req, res, next) => {
        return await Work.find((err, works) => {
            if(!err){
                const result = works.map(work => {
                    return _.pick(work, ['nameUrl', 'description', 'tags', 'miniature', 'miniatureHeight', 'sortWeight'])
                })
                return res.json(result)
            } else {
                return next(err)
            }
        })
    })

    api.get('/works/:nameUrl', async (req, res, next) => {
        return await Work.findOne({
            nameUrl: req.params.nameUrl
        }, (err, work) => {            
            if(!err){
                if(work){
                    return res.json(work)
                } else {
                    return res.status(404).json({error: '404'})
                }
            } else {
                return next(err)
            }
        })
    })

    return api
}