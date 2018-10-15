import layout from '../client/layout'
import getAuth from './resources/auth'
import getApi from './api'
import getPublicApi from './api/publicApi'

export default (app) => {
    const auth = getAuth()
    const config = app.get('config')
    app.use('/admin/', auth.verifyUser)
    
    app.get('/', (req, res) => {        
        res.send(layout({
            title: config.indexTitle,
            script: config.bundle.js.site,
            css:    config.bundle.css
        }))
    })
    
    app.get('/admin', (req, res) => {
        console.log('--> /admin')
        res.send(layout({
            title: 'Портфолио | Панель управления',
            script: config.bundle.js.admin,
            css:    config.bundle.css
        }))
    })

    app.post('/login', async (req, res) => {        
        if(req.body.login && req.body.password){
            const login = req.body.login
            const password = req.body.password
            const userResult = await auth.validateDB(login, password)
            if(userResult.isAuthenticated){
                const token = auth.getToken(
                    userResult.user,
                    config.jwt.secret,
                    config.jwt.expiresSec
                )
                res.cookie('auth_token', token)
                res.json({ redirectTo: '/admin#/' })
            }else{
                res.status(401).json({ message: 'Проверьте правильность Логина и Пароля' })
            }
        }
    })

    app.get('/logout', (req, res) => {
        res.clearCookie('auth_token')
        res.clearCookie('userCityNameUrl')
        res.clearCookie('demo')
        res.redirect('/#/login')
    })

    const api = getApi()
    app.use('/admin/api', api)

    const publicApi = getPublicApi()
    app.use('/publicapi', publicApi)

    app.get('/:something', (req, res) => {
        res.redirect('/#/404')
    })
}