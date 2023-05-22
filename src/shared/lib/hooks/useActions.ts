import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../../../app/providers/storeRedux/actionCreators";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}
