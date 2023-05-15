export interface UserState {
    isAuth: boolean;
}

export enum UserActionsEnum {
    SET_IS_AUTH = 'SET_IS_AUTH'
}

export interface SetIsAuthAction {
    type: UserActionsEnum.SET_IS_AUTH,
    payload: boolean
}

export type UserAction = SetIsAuthAction;
