import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../../app/providers/withRedux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
