import {LangsList} from "../../../../src/entities/base/lang";

export interface SystemState {
    currentLang: LangsList;
}

export enum SystemActionsEnum {
    SET_CURRENT_LANG = "SET_CURRENT_LANG",
}

export interface SetCurrentLangAction {
    type: SystemActionsEnum.SET_CURRENT_LANG;
    payload: LangsList;
}

export type SystemAction = SetCurrentLangAction;
