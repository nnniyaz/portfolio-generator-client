import {LangsList} from "../../../models/base/mlString";
import {SetCurrentLangAction, SystemActionsEnum} from "./types";
import {AppDispatch, RootState} from "../../index";

export const SystemActionCreators = {
    setCurrentLang: (lang: LangsList): SetCurrentLangAction => ({
        type: SystemActionsEnum.SET_CURRENT_LANG,
        payload: lang
    }),

    changeCurrentLang: () => (dispatch: AppDispatch, getState: () => RootState) => {
        switch (getState().system.currentLang) {
            case LangsList.RU:
                dispatch(SystemActionCreators.setCurrentLang(LangsList.EN));
                break;
            case LangsList.EN:
                dispatch(SystemActionCreators.setCurrentLang(LangsList.RU));
                break;
        }
    }
}
