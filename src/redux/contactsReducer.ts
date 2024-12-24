import { DATA_CONTACT } from "src/__data__";
import { ADD_CONTACTS_ACTION, ProjectActions } from "./actions";
import { ContactDto } from "src/types/dto/ContactDto";

let initialContactsState: ContactDto[] = DATA_CONTACT

export function contactsReducer(state = initialContactsState, action: ProjectActions) {
    switch (action.type) {
        case ADD_CONTACTS_ACTION:
            return state

        default:
            break;
    }
    
    
    return state
}