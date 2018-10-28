import * as types from './actionTypes'
import * as api from 'client/data/api/admin'

const defaultCallback = () => null

export const getWorks = () => async dispatch => {
    dispatch({type: types.GET_WORKS_START})
    try {
        const works = await api.getWorks()
        dispatch({
            type:    types.GET_WORKS_SUCCESS,
            payload: works || [],
        })
    } catch(err) {
        dispatch({
            type:    types.GET_WORKS_FAIL,
            payload: err,
            error:   true,
        })
    }
}

export const appendWork = (work, callback=defaultCallback) => async dispatch => {
    dispatch({type: types.APPEND_WORK_START})
    try {
        const newWork = await api.createWork(work)
        .then(() => callback({
            message: 'Кейс создан',
            type:    'success',
        }))
        dispatch({
            type:    types.APPEND_WORK_SUCCESS,
            payload: newWork,
        })        
    } catch(err) {
        callback({
            message: 'Ошибка создания кейса',
            type:    'warning',
        })
        dispatch({
            type:    types.APPEND_WORK_FAIL,
            payload: err,
            error:   true,
        })
    }
}

export const editWork = (nameUrl, work, callback=defaultCallback) => async dispatch => {
    dispatch({type: types.EDIT_WORK_START})
    try {
        const editedWork = await api.editWork(nameUrl, work)
        .then(() => callback({
            message: 'Кейс отредактирован',
            type:    'success',
        }))
        dispatch({
            type:    types.EDIT_WORK_SUCCESS,
            payload: editedWork,
        })
    } catch(err) {
        callback({
            message: 'Ошибка редактирования кейса',
            type:    'warning',
        })
        dispatch({
            type:    types.EDIT_WORK_FAIL,
            payload: err,
            error:   true,
        })
    }
}

export const deleteWork = (nameUrl, callback=defaultCallback) => async dispatch => {
    dispatch({type: types.DELETE_WORK_START})
    try {
        const deletedWork = await api.deleteWork(nameUrl)
        .then(() => callback({
            message: 'Кейс удален',
            type:    'success',
        }))
        dispatch({
            type:    types.DELETE_WORK_SUCCESS,
            payload: deletedWork,
        })
    } catch(err) {
        callback({
            message: 'Ошибка удаления кейса',
            type:    'warning',
        })
        dispatch({
            type:    types.DELETE_WORK_FAIL,
            payload: err,
            error:   true,
        })
    }
}