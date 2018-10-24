import * as types from './actionTypes'
import * as api from 'client/data/api/admin'

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

export const appendWork = params => async dispatch => {
    dispatch({type: types.APPEND_WORK_START})
    try {
        const newWork = await api.createWork(params)
        dispatch({
            type:    types.APPEND_WORK_SUCCESS,
            payload: newWork,
        })
    } catch(err) {
        dispatch({
            type:    types.APPEND_WORK_FAIL,
            payload: err,
            error:   true,
        })
    }
}

export const editWork = (nameUrl, params) => async dispatch => {
    dispatch({type: types.EDIT_WORK_START})
    try {
        const editedWork = await api.editWork(nameUrl, params)
        dispatch({
            type:    types.EDIT_WORK_SUCCESS,
            payload: editedWork,
        })
    } catch(err) {
        dispatch({
            type:    types.EDIT_WORK_FAIL,
            payload: err,
            error:   true,
        })
    }
}

export const deleteWork = nameUrl => async dispatch => {
    dispatch({type: types.DELETE_WORK_START})
    try {
        const deletedWork = await api.deleteWork(nameUrl)
        dispatch({
            type:    types.DELETE_WORK_SUCCESS,
            payload: deletedWork,
        })
    } catch(err) {
        dispatch({
            type:    types.DELETE_WORK_FAIL,
            payload: err,
            error:   true,
        })
    }
}