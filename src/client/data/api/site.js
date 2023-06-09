import { works } from 'mocks'

const apiPath = '/publicapi'

export const getWorks = () => {
    // return fetch(`${apiPath}/works`, {
    //     method: 'GET'
    // })
    // .then(res => res.json())
    return works
}

export const getWork = nameUrl => {
    // return fetch(`${apiPath}/works/${nameUrl}`, {
    //     method: 'GET'
    // })
    // .then(res => res.json())
    const work = works.filter(work => work.nameUrl === nameUrl)[0]
    console.log('GET WORK', work);
    return work
}