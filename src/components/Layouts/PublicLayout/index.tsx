import React, {useEffect} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {LangsList} from "../../../models/IMlString";
import {styles} from "../../../assets/styles/styles";
import {isEmpty} from "lodash";
import {txt} from "../../../assets/txt/txt";
import {Link, Outlet, useLocation} from "react-router-dom";
import {publicRoutes} from "../../../routes";
import classes from "./index.module.scss";

const PublicLayout = () => {
    const location = useLocation();

    const {currentLang} = useTypedSelector(state => state.system);
    const {profile, isLoadingGetProfile} = useTypedSelector(state => state.profile);
    const {setCurrentLang, getProfile} = useActions();

    const profileData = {
        avatar: isEmpty(profile?.avatar) ? "" : profile.avatar,
        fullName: isEmpty(profile?.fullName) ? txt.some_person[currentLang] : profile.fullName[currentLang],
        email: isEmpty(profile?.email) ? txt.some_cool_email[currentLang] : profile.email,
        bio: isEmpty(profile?.bio) ? txt.some_cool_bio[currentLang] : profile.bio[currentLang],
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
            <div className={classes.header}>
                <div className={classes.header__group}>
                    <div className={classes.header__group__item}>
                        <img
                            src={profileData.avatar}
                            className={classes.header__group__item__img}
                            alt={"avatar"}
                        />
                    </div>
                    <div className={classes.header__group__item}>
                        <div className={classes.header__group__item__upper}>
                            <div className={styles.paragraphTitle}>{profileData.fullName}</div>
                        </div>
                        <div className={classes.header__group__item__lower}>
                            {[...publicRoutes].slice(1, publicRoutes.length).map((route) => (
                                <Link
                                    className={location.pathname.includes(route.path) ? styles.linkActive : styles.link}
                                    to={route.path}
                                >
                                    {route.name[currentLang]}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={classes.header__group__item__lang}>
                    <div className={styles.subParagraphLink} onClick={changeLang}>
                        {currentLang}
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <Outlet/>
            </div>
            <div className={classes.footer}>
                <div className={styles.subParagraphLink}>
                    {profileData.email}
                </div>
                <div className={styles.subParagraph}>
                    2023
                </div>
            </div>
        </div>
    );
};

export default PublicLayout;
