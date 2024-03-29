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
            nameUrl,
            miniature,
            miniatureHeight,
            headImg,
            tags,
            siteUrl,
            description,
            rows,
            sortWeight,
            title,
            color,
        } = req.body
        
        const work = new Work({
            nameUrl,
            miniature,
            miniatureHeight,
            headImg,
            tags,
            siteUrl,
            description,
            rows,
            sortWeight,
            title,
            color,
        })

        console.log('NEW WORK = ', JSON.stringify(work))
        
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
            nameUrl,
            miniature,
            miniatureHeight,
            headImg,
            tags,
            siteUrl,
            description,
            rows,
            sortWeight,
            title,
            color,
        } = req.body
        return await Work.findOne({
            nameUrl: req.params.nameUrl
        }, (err, work) => {
            if(!err){
                if(!work){
                    return next()
                }
                work.nameUrl         = nameUrl         || work.nameUrl
                work.miniature       = miniature       || work.miniature
                work.miniatureHeight = miniatureHeight || work.miniatureHeight
                work.headImg         = headImg         || work.headImg
                work.tags            = tags            || work.tags
                work.siteUrl         = siteUrl         || work.siteUrl
                work.description     = description     || work.description
                work.rows            = rows            || work.rows
                work.sortWeight      = sortWeight      || work.sortWeight
                work.title           = title           || work.title
                work.color           = color           || work.color

                console.log('CHANGE WORK = ', JSON.stringify(work))
                
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