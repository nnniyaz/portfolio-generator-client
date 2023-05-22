import {SetCurrentLangAction, SystemActionsEnum} from "./types";
import {LangsList} from "../../../../src/entities/base/lang";

export const SystemActionCreators = {
    setCurrentLang: (lang: LangsList): SetCurrentLangAction => ({
        type: SystemActionsEnum.SET_CURRENT_LANG,
        payload: lang
    }),
}
