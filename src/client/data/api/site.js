const apiPath = '/publicapi'

export const getWorks = async () => {
    return fetch(`${apiPath}/works`, {
        method: 'GET'
    })
    .then(res => res.json())
}