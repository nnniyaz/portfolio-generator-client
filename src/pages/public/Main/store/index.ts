import {ProfileAction, ProfileActionsEnum, ProfileState} from "./types";
import {Profile} from "../../../../entities/profile";

const initialState: ProfileState = {
    profile: {} as Profile,
    isLoadingGetProfile: false,
}

export default function ProfileReducer (state: ProfileState = initialState, action: ProfileAction): ProfileState {
    switch (action.type) {
        case ProfileActionsEnum.SET_PROFILE:
            return {...state, profile: action.payload}
        case ProfileActionsEnum.SET_IS_LOADING_GET_PROFILE:
            return {...state, isLoadingGetProfile: action.payload}
        default:
            return state
    }
}
