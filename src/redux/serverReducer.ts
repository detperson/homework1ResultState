import { CHECK_SERVER_STATUS_ACTION, ProjectActions, SERVER_STATUS_ERROR_ACTION, SERVER_STATUS_OK_ACTION } from "./actions";

let initialState = {
    answerIsOk: false,
    loading: false
}

export function serverReducer(state = initialState, action: ProjectActions) {
    switch (action.type) {
        case CHECK_SERVER_STATUS_ACTION:
            return {
                answerIsOk: false,
                loading: true
            }

        case SERVER_STATUS_OK_ACTION:
            return {
                answerIsOk: true,
                loading: false
            }

        case SERVER_STATUS_ERROR_ACTION:
            return {
                answerIsOk: false,
                loading: false
            }
        
        default:
            break;
    }
    
    
    return state
}