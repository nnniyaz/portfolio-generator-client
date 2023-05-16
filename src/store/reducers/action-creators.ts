import {ProfileActionCreators} from "./profile/action-creators";
import {SystemActionCreators} from "./system/action-creators";
import {UserActionCreators} from "./user/action-creators";

export const allActionCreators = {
    ...ProfileActionCreators,
    ...UserActionCreators,
    ...SystemActionCreators,
}
