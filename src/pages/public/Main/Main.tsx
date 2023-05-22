import React from "react";
import {styles} from "../../../assets/styles/styles";
import {txt} from "../../../assets/txt/txt";
import {isEmpty} from "lodash";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Loading} from "../../../components/Loading";
import classes from "./Main.module.scss";

export function Main() {
    const {currentLang} = useTypedSelector(state => state.system);
    const {profile, isLoadingGetProfile} = useTypedSelector(state => state.profile);

    const profileData = {
        bio: isEmpty(profile?.bio) ? {"paragraph": txt.some_cool_bio} : profile.bio,
        socials: isEmpty(profile?.socials) ? [{
            label: txt.social_network,
            link: "@some_cool_account"
        }] : profile.socials,
    }

    return (
        <div className={classes.main}>
            {
                isLoadingGetProfile
                    ?
                    <Loading width={"100%"} height={"calc(100vh - 153px)"}/>
                    :
                    <div className={classes.container}>

                        {Object.keys(profileData.bio).map((key) => (
                            <p className={styles.paragraph} key={key}>{profileData.bio[key]?.[currentLang]}</p>
                        ))}

                        <ul className={classes.socials}>
                            {profileData.socials.map((social, index) => (
                                <li key={index}>
                                    <a className={styles.link} href={social.link} rel="noreferrer">
                                        {social.label?.[currentLang]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
            }
        </div>
    );
}
