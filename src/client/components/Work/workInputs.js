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
        default: 268,
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
        size: '1/2',   
    },
    {
        id: 'siteUrl',
        label: 'Адрес сайта',   
        size: '1/4',            
    },
    {
        id: 'sortWeight',
        label: 'Вес',
        type: 'number',
        default: 99,
        size: '1/4',
    },
    {
        id: 'description',
        label: 'Краткое описание',
        required: true,
        size: 'full',
    },
    
]