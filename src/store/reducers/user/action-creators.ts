import {SetIsAuthAction, UserActionsEnum} from "./types";

export const UserActionCreators = {
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({type: UserActionsEnum.SET_IS_AUTH, payload: isAuth}),
}
