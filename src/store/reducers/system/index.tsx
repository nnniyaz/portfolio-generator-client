import {SystemAction, SystemActionsEnum, SystemState} from "./types";
import {LangsList} from "../../../models/IMlString";

const initialState: SystemState = {
    currentLang: LangsList.RU,
}

export default function SystemReducer (state: SystemState = initialState, action: SystemAction): SystemState {
    switch (action.type) {
        case SystemActionsEnum.SET_CURRENT_LANG:
            return {...state, currentLang: action.payload}
        default:
            return state;
    }
}
