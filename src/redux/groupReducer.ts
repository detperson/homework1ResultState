import { DATA_GROUP_CONTACT } from "src/__data__";
import { ADD_TO_GROUP_ACTION, ProjectActions } from "./actions";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

let initialGroupState: GroupContactsDto[] = DATA_GROUP_CONTACT

export function groupReducer(state = initialGroupState, action: ProjectActions) {
    switch (action.type) {
        case ADD_TO_GROUP_ACTION:
            return state

        default:
            break;
    }
    
    return state
}