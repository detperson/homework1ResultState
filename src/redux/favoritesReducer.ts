import { DATA_CONTACT } from "src/__data__";
import { ADD_TO_FAVORITES_ACTION, DELETE_FROM_FAVORITES_ACTION, ProjectActions } from "./actions";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

//Получаю данные из localStorage если они есть
function initialFromLocalStorage(): FavoriteContactsDto {
    const stateFromLocalStorage = localStorage.getItem('reduxState')
    if (stateFromLocalStorage !== null) {
        return JSON.parse(stateFromLocalStorage).favorites
    }

    return [
        DATA_CONTACT[0].id,
        DATA_CONTACT[1].id,
        DATA_CONTACT[2].id,
        DATA_CONTACT[3].id,
    ]
}

let initialFavoritesState: FavoriteContactsDto  = initialFromLocalStorage()

export function favoritesReducer(state = initialFavoritesState, action: ProjectActions): FavoriteContactsDto {
    switch (action.type) {
        case ADD_TO_FAVORITES_ACTION:
            let newFavorites = [...state]
            newFavorites.push(action.payload.id)
            return newFavorites
            
        case DELETE_FROM_FAVORITES_ACTION:
            let index = state.indexOf(action.payload.id)
            let deletedFavorites = [...state]
            deletedFavorites.splice(index, 1)
            return deletedFavorites

        default:
            break;
    }

    return state
}