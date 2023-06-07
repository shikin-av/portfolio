export default [
    {
        id: 'nameUrl',
        label: 'URL кейса',
        required: true,     
        size: '1/3',   
    },
    {
        id: 'title',
        label: 'Заголовок',
        required: true,     
        size: '1/3',   
    },
    {
        id: 'siteUrl',
        label: 'Адрес сайта',   
        size: '1/3',            
    },

    {
        id: 'miniatureHeight',
        label: 'Высота миниатюры',
        required: true,        
        type: 'number',
        size: '1/3',
        default: 268,
    },
    {
        id: 'sortWeight',
        label: 'Вес',
        type: 'number',
        default: 99,
        size: '1/3',
    },
    {
        id: 'color',
        label: 'Цвет',
        type: 'color',
        default: '#607d8b',
        size: '1/3',
    },

    {
        id: 'miniature',
        label: 'Миниатюра',
        required: true,   
        size: '1/2',     
    },    
    {
        id: 'headImg',
        label: 'Изображение в шапке',
        required: true,   
        size: '1/2',     
    },
    {
        id: 'tags',
        label: 'Инструменты',
        required: true,     
        size: '1/2',   
    },
    {
        id: 'description',
        label: 'Краткое описание',
        required: true,
        size: '1/2',
    },
    
]