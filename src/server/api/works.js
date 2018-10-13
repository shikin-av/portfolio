import { Router } from 'express'

import Work from '../models/Work'

export default () => {
    const api = Router()

    api.get('/', async (req, res, next) => {
        return await Work.find((err, cities) => {
            if(!err){
                return res.json(cities)
            } else {
                return next(err)
            }
        })
    })

    api.get('/:nameUrl', async (req, res, next) => {
        return await Work.findOne({
            nameUrl: req.params.nameUrl
        }, (err, work) => {
            if(!err){
                if(work){
                    return res.json(work)
                } else {
                    return next()
                }
            } else {
                return next(err)
            }
        })
    })

    api.post('/', async (req, res, next) => {
        const {
            title,
            content,
            nameUrl,
        } = req.body
        const work = new Work({
            title,
            content,
            nameUrl,
        })
        
        return await work.save(err => {
            if(!err) {
                return res.status(201).json(work)
            } else {
                return next(err)
            }
        })
    })

    api.put('/:nameUrl', async (req, res, next) => {
        const {
            title,
            content,
            nameUrl,
        } = req.body
        return await Work.findOne({
            nameUrl: req.params.nameUrl
        }, (err, work) => {
            if(!err){
                if(!work){
                    return next()
                }
                work.title    = title   || work.title
                work.content  = content || work.content
                work.nameUrl  = nameUrl || work.nameUrl
                
                return work.save((err) => {
                    if(!err) {
                        return res.status(202).json(work)
                    } else {
                        return next(err)
                    }
                })
            } else {
                return next(err)
            }
        })
    })

    api.delete('/:nameUrl', async (req, res, next) => {
        return await Work.findOne({
            nameUrl: req.params.nameUrl
        }, (err, work) => {
            if(!err){
                if(!work){
                    return next()
                }
    
                return work.remove(err => {
                    if(!err){
                        return res.json({ status: 'OK' })
                    } else {
                        return next(err)
                    }
                })
            } else {
                return next(err)
            }
        })
    })

    return api
}