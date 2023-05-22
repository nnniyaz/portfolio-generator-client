import React from 'react';
import Loader from "../Loader";
import {styles} from "../../../styles/styles";
import {publicRoutes} from "../../../routes";
import {Link, useLocation} from "react-router-dom";
import classes from "./index.module.scss";
import {LangsList} from "../../../../models/IMlString";

interface HeaderProps {
    loading: boolean;
    loadingText: string;
    avatarUrl: string;
    fullName: string;
    currentLang: LangsList;
    changeLang: () => void;
}

const Header = ({loading, loadingText, avatarUrl, fullName, currentLang, changeLang}: HeaderProps) => {
    const location = useLocation();
    return (
        <div className={classes.header}>
            <div className={classes.header__group}>
                {
                    loading
                        ?
                        <div className={classes.loading__bar}>
                            <Loader width={40} height={40}/>
                            <div className={styles.paragraph}>{loadingText}</div>
                        </div>
                        :
                        <React.Fragment>
                            <div className={classes.header__group__item}>
                                <img
                                    src={avatarUrl}
                                    className={classes.header__group__item__img}
                                    alt={"avatar"}
                                />
                            </div>
                            <div className={classes.header__group__item}>
                                <div className={classes.header__group__item__upper}>
                                    <div className={styles.paragraphTitle}>{fullName}</div>
                                </div>
                                <div className={classes.header__group__item__lower}>
                                    {[...publicRoutes].slice(1, publicRoutes.length).map((route) => (
                                        <Link
                                            key={route.path}
                                            className={location.pathname.includes(route.path) ? styles.linkActive : styles.link}
                                            to={route.path}
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
    );
};

export default Header;
