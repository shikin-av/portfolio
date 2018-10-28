import config from 'config/client'
const apiPath = config.apiPath

export const getWorks = async () => {
    return fetch(`${apiPath}/works`, {
        method: 'GET',
        credentials: 'include',
    })
    .then(res => res.json())
}

export const getWork = async nameUrl => {
    return fetch(`${apiPath}/works/${nameUrl}`, {
        method: 'GET',
        credentials: 'include',
    })
    .then(res => res.json())
}

export const createWork = async work => {
    return fetch(`${apiPath}/works`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(work)
    })
    .then(res => res.json())
}

export const editWork = async (nameUrl, work) => {
    return fetch(`${apiPath}/works/${nameUrl}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(work)
    })
    .then(res => res.json())
}

export const deleteWork = async nameUrl => {
    return fetch(`${apiPath}/works/${nameUrl}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(res => res.json())
}