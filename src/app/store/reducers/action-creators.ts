import {SystemActionCreators} from "./system/action-creators";
import {ProfileActionCreators} from "pages/public/Main/store/action-creators";
import {UserActionCreators} from "./user/action-creators";

export const allActionCreators = {
    ...SystemActionCreators,
    ...ProfileActionCreators,
    ...UserActionCreators,
}
