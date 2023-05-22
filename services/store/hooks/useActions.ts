import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import {ProfileActionCreators} from "../reducers/profile/action-creators";
import {UserActionCreators} from "../reducers/user/action-creators";
import {SystemActionCreators} from "../reducers/system/action-creators";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...ProfileActionCreators,
        ...UserActionCreators,
        ...SystemActionCreators,
    }, dispatch);
}
