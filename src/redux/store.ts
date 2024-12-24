import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsReducer";
import { favoritesReducer } from "./favoritesReducer";
import { groupReducer } from "./groupReducer";
import thunkMiddleware from "redux-thunk";
import { serverReducer } from "./serverReducer";


const rootReducer = combineReducers({
    contacts: contactsReducer,
    favorites: favoritesReducer,
    groups: groupReducer,
    serverStatus: serverReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

export type RootState = ReturnType<typeof rootReducer>



function saveToLocalStorage(state: RootState) {
    try {
        let readyState = JSON.stringify(state)
        localStorage.setItem('reduxState', readyState)
    } catch (e) {
        console.error('Не удалось сохранить состояние', e)
    }
}

// Сохраняю state в localstorage когда происходит dispatch экшена
store.subscribe(() => saveToLocalStorage(store.getState()))

