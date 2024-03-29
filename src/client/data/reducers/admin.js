import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import _ from 'lodash'

import * as types from 'client/data/actions/actionTypes'

const works = (state=[], {type, payload}) => {    
    switch(type){
        case types.GET_WORKS_SUCCESS:   return payload
        case types.GET_WORKS_FAIL: return state

        case types.APPEND_WORK_SUCCESS: return [...state, payload]
        case types.APPEND_WORK_FAIL: return state

        case types.EDIT_WORK_SUCCESS:   
            const editedWorkIndex = _.findIndex(state, work => {
                return work.nameUrl === payload.nameUrl
            })
            state[editedWorkIndex] = payload
            return state
        case types.EDIT_WORK_FAIL: return state

        case types.DELETE_WORK_SUCCESS: 
            _.remove(state, work => {
                return work.nameUrl === payload
            })
            return state
        case types.DELETE_WORK_FAIL: return state

        default: return state
    }
}

export default combineReducers({
    works,
    router: routerReducer,
})