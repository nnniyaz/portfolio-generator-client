import React, {useEffect} from "react";
import {txt} from "../../../assets/txt/txt";
import {isEmpty} from "lodash";
import {useTypedSelector} from "../../../../services/store/hooks/useTypedSelector";
import {useActions} from "../../../../services/store/hooks/useActions";
import {LangsList} from "../../../../domain/base/lang";
import {Outlet} from "react-router-dom";
import {Header} from "../../Header";
import {Footer} from "../../Footer";
import classes from "./PublicLayout.module.scss";

interface ProfileProps {
    avatar: string;
    fullName: string;
    email: string;
    established: number;
}

export const PublicLayout = () => {
    const {currentLang} = useTypedSelector(state => state.system);
    const {profile} = useTypedSelector(state => state.profile);
    const {setCurrentLang, getProfile} = useActions();

    const profileData: ProfileProps = {
        avatar: isEmpty(profile?.avatar) ? "" : profile.avatar,
        fullName: isEmpty(profile?.fullName) ? txt.some_person[currentLang] : profile.fullName[currentLang],
        // email: isEmpty(profile?.socials?.['email']) ? txt.some_cool_email[currentLang] : profile?.socials?.email,
        email: txt.some_cool_email[currentLang],
        established: isEmpty(profile?.established) ? 2023 : profile.established,
    }

    const changeLang = () => {
        switch (currentLang) {
            case LangsList.RU:
                setCurrentLang(LangsList.EN);
                break;
            case LangsList.EN:
                setCurrentLang(LangsList.RU);
                break;
        }
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
                avatarUrl={profileData.avatar}
                fullName={profileData.fullName}
                currentLang={currentLang}
                changeLang={changeLang}
            />
            <div className={classes.content}>
                <Outlet/>
            </div>
            <Footer email={profileData.email} establishment_year={profileData.established}/>
        </div>
    );
};
