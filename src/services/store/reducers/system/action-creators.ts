import {LangsList} from "../../../../models/IMlString";
import {SetCurrentLangAction, SystemActionsEnum} from "./types";

export const SystemActionCreators = {
    setCurrentLang: (lang: LangsList): SetCurrentLangAction => ({
        type: SystemActionsEnum.SET_CURRENT_LANG,
        payload: lang
    }),
}
