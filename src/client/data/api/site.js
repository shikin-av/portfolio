const apiPath = '/publicapi'

export const getWorks = async () => {
    return fetch(`${apiPath}/works`, {
        method: 'GET'
    })
    .then(res => res.json())
}

export const getWork = async nameUrl => {
    return fetch(`${apiPath}/works/${nameUrl}`, {
        method: 'GET'
    })
    .then(res => res.json())
}