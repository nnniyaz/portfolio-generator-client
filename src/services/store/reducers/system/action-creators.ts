import {SetCurrentLangAction, SystemActionsEnum} from "./types";
import {LangsList} from "../../../../domain/base/lang";

export const SystemActionCreators = {
    setCurrentLang: (lang: LangsList): SetCurrentLangAction => ({
        type: SystemActionsEnum.SET_CURRENT_LANG,
        payload: lang
    }),
}
