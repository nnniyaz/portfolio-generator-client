import {UserAction, UserActionsEnum, UserState} from "./types";

const initialState: UserState = {
    isAuth: false
}

export default function UserReducer (state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionsEnum.SET_IS_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}
