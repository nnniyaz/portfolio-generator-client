import {IProfile} from "../../../../models/IProfile";

export interface ProfileState {
    profile: IProfile;
    isLoadingGetProfile: boolean;
}

export enum ProfileActionsEnum {
    SET_PROFILE = "SET_PROFILE",
    SET_IS_LOADING_GET_PROFILE = "SET_IS_LOADING_GET_PROFILE",
}

export interface SetProfile {
    type: ProfileActionsEnum.SET_PROFILE,
    payload: IProfile
}

export interface SetIsLoadingGetProfile {
    type: ProfileActionsEnum.SET_IS_LOADING_GET_PROFILE,
    payload: boolean
}

export type ProfileAction = SetProfile | SetIsLoadingGetProfile;
