import {SetProfile, ProfileActionsEnum, SetIsLoadingGetProfile} from "./types";
import {AppDispatch} from "app/store";
import ProfileApi from "../api";
import {isEmpty} from "lodash";
import {log} from "shared/lib/utils/log";
import {Profile} from "entities/profile";

export const ProfileActionCreators = {
    setProfile: (profile: Profile): SetProfile => ({
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
