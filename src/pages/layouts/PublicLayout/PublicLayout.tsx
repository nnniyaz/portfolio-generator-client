import React, {useEffect} from "react";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import {useActions} from "shared/lib/hooks/useActions";
import {isEmpty} from "lodash";
import {txt} from "shared/assets/txt/txt";
import {Outlet} from "react-router-dom";
import {Header} from "./ui/Header";
import {Footer} from "./ui/Footer";
import classes from "./PublicLayout.module.scss";

export function PublicLayout() {
    const {currentLang} = useTypedSelector(state => state.system);
    const {profile, isLoadingGetProfile} = useTypedSelector(state => state.profile);
    const {changeCurrentLang, getProfile} = useActions();

    const profileData = {
        avatarUrl: isEmpty(profile?.avatarUrl) ? "" : profile.avatarUrl,
        fullName: isEmpty(profile?.fullName) ? txt.some_person[currentLang] : profile.fullName[currentLang],
        email: isEmpty(profile?.email) ? txt.some_cool_email[currentLang] : profile.email,
    }

    useEffect(() => {
        if (!isEmpty(profile)) return;

        const controller = new AbortController();
        getProfile(controller);
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.main}>
            <Header
                avatarUrl={profileData.avatarUrl}
                fullName={profileData.fullName}
                currentLang={currentLang}
                changeLang={changeCurrentLang}
                loading={isLoadingGetProfile}
            />
            <div className={classes.content}>
                <Outlet/>
            </div>
            <Footer email={profile.email}/>
        </div>
    );
}
