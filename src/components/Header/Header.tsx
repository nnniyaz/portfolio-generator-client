import React from "react";
import {Link, useLocation} from "react-router-dom";
import {publicRoutes, RouteNames} from "../../routes";
import {styles} from "../../assets/styles/styles";
import {LangsList} from "../../models/base/mlString";
import AvatarPlaceholder from "../../assets/imgs/avatar-placeholder.png";
import classes from "./Header.module.scss";
import {txt} from "../../assets/txt/txt";
import {Loading} from "../Loading";

interface HeaderProps {
    avatarUrl: string;
    fullName: string;
    currentLang: LangsList;
    changeLang: () => void;
    loading?: boolean;
}

export function Header({avatarUrl, fullName, currentLang, changeLang, loading}: HeaderProps) {
    const location = useLocation();
    const mainLink = RouteNames.MAIN;

    const onImgError = ({currentTarget}: { currentTarget: EventTarget & HTMLImageElement }) => {
        currentTarget.onerror = null;
        currentTarget.src = AvatarPlaceholder;
    }

    const isActiveLink = (path: string) => {
        return location.pathname.includes(path);
    }

    return (
        <div className={classes.heading}>
            <div className={classes.header__group}>
                {
                    loading
                        ?
                        <div className={classes.loading__wrapper}>
                            <Loading innerWidth={"30px"} innerHeight={"30px"}/>
                            <div className={styles.paragraph}>
                                {`${txt.loading[currentLang]}...`}
                            </div>
                        </div>
                        :
                        <React.Fragment>
                            <Link className={classes.header__group__item} to={mainLink}>
                                <img
                                    src={avatarUrl}
                                    className={classes.header__group__item__img}
                                    onError={onImgError}
                                    alt={"avatar"}
                                />
                            </Link>
                            <div className={classes.header__group__item}>
                                <Link className={classes.header__group__item__upper} to={mainLink}>
                                    <div className={styles.paragraphTitle}>
                                        {fullName}
                                    </div>
                                </Link>
                                <div className={classes.header__group__item__lower}>
                                    {[...publicRoutes].slice(1, publicRoutes.length).map((route) => (
                                        <Link
                                            className={isActiveLink(route.path) ? styles.linkActive : styles.link}
                                            to={route.path}
                                            key={route.path}
                                        >
                                            {route.name[currentLang]}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                }
            </div>
            <div className={classes.header__group__item__lang}>
                <div className={styles.subParagraphLink} onClick={changeLang}>
                    {currentLang}
                </div>
            </div>
        </div>
    )
}
