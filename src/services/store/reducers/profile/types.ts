import {Profile} from "../../../../domain/profile";

export interface ProfileState {
    profile: Profile;
    isLoadingGetProfile: boolean;
}

export enum ProfileActionsEnum {
    SET_PROFILE = "SET_PROFILE",
    SET_IS_LOADING_GET_PROFILE = "SET_IS_LOADING_GET_PROFILE",
}

export interface SetProfile {
    type: ProfileActionsEnum.SET_PROFILE,
    payload: Profile
}

export interface SetIsLoadingGetProfile {
    type: ProfileActionsEnum.SET_IS_LOADING_GET_PROFILE,
    payload: boolean
}

export type ProfileAction = SetProfile | SetIsLoadingGetProfile;
