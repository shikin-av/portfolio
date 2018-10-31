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
        dispatch({
            type:    types.APPEND_WORK_SUCCESS,
            payload: newWork,
        })        
        callback({
            message: 'Кейс создан',
            type:    'success',
        })
    } catch(err) {
        dispatch({
            type:    types.APPEND_WORK_FAIL,
            payload: err,
            error:   true,
        })
        callback({
            message: 'Ошибка создания кейса',
            type:    'warning',
        })        
    }
}

export const editWork = (nameUrl, work, callback=defaultCallback) => async dispatch => {
    dispatch({type: types.EDIT_WORK_START})
    try {
        const editedWork = await api.editWork(nameUrl, work)        
        dispatch({
            type:    types.EDIT_WORK_SUCCESS,
            payload: editedWork,
        })
        callback({
            message: 'Кейс отредактирован',
            type:    'success',
        }) 
    } catch(err) {
        dispatch({
            type:    types.EDIT_WORK_FAIL,
            payload: err,
            error:   true,
        })
        callback({
            message: 'Ошибка редактирования кейса',
            type:    'warning',
        })        
    }
}

export const deleteWork = (nameUrl, callback=defaultCallback) => async dispatch => {
    dispatch({type: types.DELETE_WORK_START})
    try {
        const deletedWork = await api.deleteWork(nameUrl)        
        dispatch({
            type:    types.DELETE_WORK_SUCCESS,
            payload: deletedWork,
        })
        callback({
            message: 'Кейс удален',
            type:    'success',
        })
    } catch(err) {
        dispatch({
            type:    types.DELETE_WORK_FAIL,
            payload: err,
            error:   true,
        })
        callback({
            message: 'Ошибка удаления кейса',
            type:    'warning',
        })        
    }
}