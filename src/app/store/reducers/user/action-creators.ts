import {SetIsAuthAction, UserActionEnum} from "./types";

export const UserActionCreators = {
    setAuth: (isAuth: boolean): SetIsAuthAction => ({type: UserActionEnum.SET_IS_AUTH, payload: isAuth}),
}
