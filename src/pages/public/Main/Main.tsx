import React from "react";
import {styles} from "shared/assets/styles/styles";
import {txt} from "shared/assets/txt/txt";
import {isEmpty} from "lodash";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import {Loading} from "shared/ui/Loading";
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
                    <Loading/>
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
