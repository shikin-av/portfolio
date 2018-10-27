import config from 'config/client'

export const worksFake = [
    {           
        nameUrl:        '01',     
        siteUrl:        'ya.ru',
        miniature:      'remont_mini.png',        
        miniatureHeight: 514,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
        tags:           'react, express',
        sortWeight:     '1',
    },
    {           
        nameUrl:        '02',     
        siteUrl:        'ya.ru',
        miniature:      'yami_mini.png',        
        miniatureHeight: 348,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
        tags:           'react, express',
        sortWeight:     '2',
    },
    {           
        nameUrl:        '03',     
        siteUrl:        'ya.ru',
        miniature:      'pagebuilder_mini.png',        
        miniatureHeight: 389,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
        tags:           'react, express',
        sortWeight:     '3',
    },
    {           
        nameUrl:        '04',     
        siteUrl:        'ya.ru',
        miniature:      'portfolio_mini.png',        
        miniatureHeight: 435,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
        tags:           'react, express',
        sortWeight:     '4',
    },
    {           
        nameUrl:        '05',     
        siteUrl:        'ya.ru',
        miniature:      'auction_mini.png',        
        miniatureHeight: 394,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
        tags:           'react, express',
        sortWeight:     '5',
    },
    {           
        nameUrl:        '06',     
        siteUrl:        'ya.ru',
        miniature:      'buket_mini.png',        
        miniatureHeight: 268,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
        tags:           'react, express',
        sortWeight:     '6',
    },
]

export const rowsFake = [            
    {
        id: 10,
        type: 'fullwidth', 
        color: 'rgb(63, 81, 181)',
        elements: [
            {
                id: 111,
                type: 'texteditor',
                content: `
                <h2 style="color: rgb(239, 239, 239); text-align: center;">Скороговорки</h2>
                <h3 style="color: rgb(239, 239, 239); text-align: center;">Вместо текста-рыбы</h3>`.trim()
            }
        ]
    },
    {
        id: 11,
        type: 'column_2',
        color: 'rgb(238, 238, 238)',
        elements: [
            {
                id: 222,
                type: 'texteditor',
                content: `
                <p style="color: rgb(40,50,78);">Баркас приехал в порт Мадрас.</p>
                <p style="color: rgb(40,50,78);">Матрос принёс на борт матрас.</p>
                <p style="color: rgb(40,50,78);">В порту Мадрас матрас матроса</p>
                <p style="color: rgb(40,50,78);">Порвали в драке альбатросы.</p>
                `.trim()
            },
            {
                id: 333,
                type: 'texteditor',
                content: `
                <p style="color: rgb(40,50,78);">Ехал Грека через реку,</p>
                <p style="color: rgb(40,50,78);">Видит Грека - в реке рак.</p>
                <p style="color: rgb(40,50,78);">Сунул Грека руку в реку,</p>
                <p style="color: rgb(40,50,78);">Рак за руку Грека - цап!</p>
                `.trim()
            }
        ]
    },
    {
        id: 12,
        type: 'column_3',
        elements: [
            {
                id: 444,
                type: 'texteditor',
                content: '<p style="color: rgb(40, 50, 78);">Корабли лавировали, лавировали, да не вылавировали.</p>'
            },
            {
                id: 555,
                type: 'texteditor',
                content: '<p style="color: rgb(40, 50, 78);">На дворе трава, на траве дрова. Не руби дрова на траве двора.</p>'
            },
            {
                id: 666,
                type: 'texteditor',
                content: '<p style="color: rgb(40, 50, 78);">Карл у Клары украл кораллы, Клара у Карла украла кларнет.</p>'
            }
        ]
    },
    
]