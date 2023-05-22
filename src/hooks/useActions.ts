import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creators";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}
