export interface UserState {
    isAuth: boolean;
}

export enum UserActionEnum {
    SET_IS_AUTH = "SET_IS_AUTH"
}

export interface SetIsAuthAction {
    type: UserActionEnum.SET_IS_AUTH;
    payload: boolean;
}

export type UserAction = SetIsAuthAction;
