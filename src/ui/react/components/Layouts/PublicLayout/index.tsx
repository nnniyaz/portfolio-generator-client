import React, {useEffect} from "react";
import {useTypedSelector} from "../../../../../services/store/hooks/useTypedSelector";
import {useActions} from "../../../../../services/store/hooks/useActions";
import {LangsList} from "../../../../models/IMlString";
import {isEmpty} from "lodash";
import {txt} from "../../../assets/txt/txt";
import {Outlet} from "react-router-dom";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import classes from "./index.module.scss";

interface IProfileData {
    avatar: string;
    fullName: string;
    email: string;
    established: number;
}

const PublicLayout = () => {
    const {currentLang} = useTypedSelector(state => state.system);
    const {profile, isLoadingGetProfile} = useTypedSelector(state => state.profile);
    const {setCurrentLang, getProfile} = useActions();

    const profileData: IProfileData = {
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
                loading={isLoadingGetProfile}
                loadingText={txt.need_to_wait_little_bit[currentLang]}
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

export default PublicLayout;
