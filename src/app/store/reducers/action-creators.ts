import {SystemActionCreators} from "./system/action-creators";
import {UserActionCreators} from "./user/action-creators";
import {ProfileActionCreators} from "pages/public/Profile/store/action-creators";
import {ProjectsActionCreators} from "widgets/ProjectsList/store/action-creators";

export const allActionCreators = {
    ...SystemActionCreators,
    ...UserActionCreators,
    ...ProfileActionCreators,
    ...ProjectsActionCreators
}
