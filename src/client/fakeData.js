import config from 'config/client'

export const worksFake = [
    {   
        title:          'Header title',
        nameUrl:        '01',     
        miniature:      'remont_mini.png',        
        miniatureHeight: 514,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
    },
    {   
        title:          'Header title',
        nameUrl:        '02',     
        miniature:      'yami_mini.png',        
        miniatureHeight: 348,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
    },
    {   
        title:          'Header title',
        nameUrl:        '03',     
        miniature:      'pagebuilder_mini.png',        
        miniatureHeight: 389,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
    },
    {   
        title:          'Header title',
        nameUrl:        '04',     
        miniature:      'portfolio_mini.png',        
        miniatureHeight: 435,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
    },
    {   
        title:          'Header title',
        nameUrl:        '05',     
        miniature:      'auction_mini.png',        
        miniatureHeight: 394,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
    },
    {   
        title:          'Header title',
        nameUrl:        '06',     
        miniature:      'buket_mini.png',        
        miniatureHeight: 268,
        description:    'Lily likes to play with crayons and pencils',
        headImg:        'remont-home.png',
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