export default [
    {
        id: 'nameUrl',
        label: 'URL кейса',
        required: true,     
        size: '1/4',   
    },
    {
        id: 'miniature',
        label: 'Миниатюра',
        required: true,   
        size: '1/4',     
    },
    {
        id: 'miniatureHeight',
        label: 'Высота миниатюры',
        required: true,        
        type: 'number',
        size: '1/4',
    },
    {
        id: 'headImg',
        label: 'Изображение в шапке',
        required: true,   
        size: '1/4',     
    },
    {
        id: 'tags',
        label: 'Инструменты',
        required: true,     
        size: '1/3',   
    },
    {
        id: 'siteUrl',
        label: 'Адрес сайта',   
        size: '1/3',            
    },
    {
        id: 'description',
        label: 'Краткое описание',
        required: true,
        //multiline: true,
        size: '1/3',
    },
]