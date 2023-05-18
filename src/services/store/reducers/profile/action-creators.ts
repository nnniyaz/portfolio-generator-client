import {SetProfile, ProfileActionsEnum, SetIsLoadingGetProfile} from "./types";
import {IProfile} from "../../../../models/IProfile";
import {AppDispatch} from "../../index";
import ProfileApi from "../../../api/profileApi";
import {isEmpty} from "lodash";
import {log} from "../../../../utils/log";

export const ProfileActionCreators = {
    setProfile: (profile: IProfile): SetProfile => ({
        type: ProfileActionsEnum.SET_PROFILE,
        payload: profile
    }),
    setIsLoadingGetProfile: (isLoading: boolean): SetIsLoadingGetProfile => ({
        type: ProfileActionsEnum.SET_IS_LOADING_GET_PROFILE,
        payload: isLoading
    }),

    getProfile: (controller: AbortController) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ProfileActionCreators.setIsLoadingGetProfile(true));
            const res = await ProfileApi.getProfile(controller);

            if (res.data.success) {
                const profile = res.data.data;

                if (isEmpty(profile)) {
                    return;
                }

                dispatch(ProfileActionCreators.setProfile(profile));
            }
        } catch (e) {
            log(e);
        } finally {
            dispatch(ProfileActionCreators.setIsLoadingGetProfile(false));
        }
    }
}
