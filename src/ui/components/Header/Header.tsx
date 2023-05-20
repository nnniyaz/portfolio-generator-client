import React from 'react';
import {styles} from "../../styles/styles";
import {publicRoutes, RouteNames} from "../../routes";
import {Link, useLocation} from "react-router-dom";
import {LangsList} from "../../../domain/base/lang";
import classes from "./Header.module.scss";

interface HeaderProps {
    avatarUrl: string;
    fullName: string;
    currentLang: LangsList;
    changeLang: () => void;
}

export const Header = ({avatarUrl, fullName, currentLang, changeLang}: HeaderProps) => {
    const location = useLocation();

    const isActiveLink = (path: string) => {
        return location.pathname.includes(path);
    }

    return (
        <div className={classes.heading}>
            <div className={classes.header__group}>
                <div className={classes.header__group__item}>
                    <img
                        src={avatarUrl}
                        className={classes.header__group__item__img}
                        alt={"avatar"}
                    />
                </div>
                <div className={classes.header__group__item}>
                    <Link className={classes.header__group__item__upper} to={RouteNames.MAIN}>
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
            </div>
            <div className={classes.header__group__item__lang}>
                <div className={styles.subParagraphLink} onClick={changeLang}>
                    {currentLang}
                </div>
            </div>
        </div>
    );
};
