import { ThunkAction } from "redux-thunk"
import { ContactDto } from "src/types/dto/ContactDto"
import { RootState } from "./store"

export const ADD_CONTACTS_ACTION = 'ADD_CONTACTS_ACTION'

export const ADD_TO_FAVORITES_ACTION = 'ADD_TO_FAVORITES_ACTION'
export const DELETE_FROM_FAVORITES_ACTION = 'DELETE_FROM_FAVORITES_ACTION'

export const ADD_TO_GROUP_ACTION = 'ADD_TO_GROUP_ACTION'

export const CHECK_SERVER_STATUS_ACTION = 'CHECK_SERVER_STATUS_ACTION'
export const SERVER_STATUS_OK_ACTION = 'SERVER_STATUS_OK_ACTION'
export const SERVER_STATUS_ERROR_ACTION = 'SERVER_STATUS_ERROR_ACTION'

interface AddContactsAction {
    type: typeof ADD_CONTACTS_ACTION
}


interface AddToFavoritesAction {
    type: typeof ADD_TO_FAVORITES_ACTION
    payload: {
        id: ContactDto['id']
    }
}

interface DeleteFromFavoritesAction {
    type: typeof DELETE_FROM_FAVORITES_ACTION
    payload: {
        id: ContactDto['id']
    }
}


interface AddToGroupAction {
    type: typeof ADD_TO_GROUP_ACTION
}


interface CheckServerStatusAction {
    type: typeof CHECK_SERVER_STATUS_ACTION
}

interface ServerStatusOkAction {
    type: typeof SERVER_STATUS_OK_ACTION
}

interface ServerStatusErrorAction {
    type: typeof SERVER_STATUS_ERROR_ACTION
}

//Action Creators
export function addToFavoritesActionCreator(id: ContactDto['id']): AddToFavoritesAction {
    return { type: ADD_TO_FAVORITES_ACTION, payload: { id } }
}

export function deleteFromFavoritesActionCreator(id: ContactDto['id']): DeleteFromFavoritesAction {
    return { type: DELETE_FROM_FAVORITES_ACTION, payload: { id } }
}


export function checkServerStatusAction(): ThunkAction<void, RootState, void, ProjectActions> {
    return async (dispatch) => {
        dispatch({type: CHECK_SERVER_STATUS_ACTION})

        try {
            const res = await fetch('https://mocki.io/v1/6ea30641-755f-4469-802c-da20874bf570')
            const data = await res.json()
            
            dispatch({type: SERVER_STATUS_OK_ACTION})
        } catch (e) {
            console.error('Ошибка:', e)
            dispatch({type: SERVER_STATUS_ERROR_ACTION})
        }
    }
}

export type ProjectActions = 
    | AddContactsAction 
    | AddToFavoritesAction 
    | DeleteFromFavoritesAction 
    | AddToGroupAction 
    | CheckServerStatusAction
    | ServerStatusOkAction
    | ServerStatusErrorAction