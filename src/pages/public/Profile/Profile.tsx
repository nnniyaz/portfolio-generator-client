import React from "react";
import {isEmpty} from "lodash";
import {txt} from "shared/assets/txt/txt";
import {Loading} from "shared/ui/Loading";
import {styles} from "shared/assets/styles/styles";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import classes from "./Profile.module.scss";

export function Profile() {
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
                    <Loading height={"300px"}/>
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
