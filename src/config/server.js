import db from './db'
import common from './common'

export default {
    port:           common.port,
    db,
    bundle: {
        js: {
            site:   './dist/site.bundle.js',
            admin:  './dist/admin.bundle.js',
        },
        css:        './dist/bundle.css',
    },    
    indexTitle:     'Портфолио | Шикин А.В.',
    jwt: {
        secret:     'MY_SECRET',
        expiresSec: 60 * 60 * 12 * 30,
    },
    assetsPath:     common.assetsPath,
    assetsDir:      common.assetsDir,
}