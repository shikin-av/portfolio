# Portfolio

Take a look: [shikin.online](https://shikin.online)

Portfolio is a single-page application made for: 
* React
* Redux
* Express 
* Mongo


### Uses:
* Material-UI
* Masonry-grid
* [Simple-Page-Builder](https://github.com/shikin-av/simple-page-builder) for edit case-pages
************
### Usage:
#### Important:

You need database config file:
`src/config/db.js`

    export default {  // access to your Mongo database
        url: '',
        user: '',
        password: ''
    }

#### Scripts

`npm start` - start express server

`npm run watch` - for development

`npm run build` - get production build

************
### Directories structure:
    assets/ - pictures and stuff
    dist/ - build for production
    src/
        client/
            site.js
            admin.js
            ...
        config/
            client.js
            server.js
            common.js
            db.js
        server/
            index.js - entry point
            App.js
            router.js
            ...
