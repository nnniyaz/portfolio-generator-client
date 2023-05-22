import {UserAction, UserActionEnum, UserState} from "./types";

const initialState: UserState = {
    isAuth: false
}

export default function UserReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionEnum.SET_IS_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state;
    }
}
