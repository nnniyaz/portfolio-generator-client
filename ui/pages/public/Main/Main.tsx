import React from "react";
import {txt} from "../../../assets/txt/txt";
import {styles} from "../../../styles/styles";
import {useTypedSelector} from "../../../../services/store/hooks/useTypedSelector";
import {isEmpty} from "lodash";
import {Profile} from "../../../../src/entities/profile";
import classes from "./Main.module.scss";
import {useStore} from "../../../../services/store";

interface ProfileProps {
    bio: Profile["bio"];
    socials: Profile["socials"];
}

export const Main = () => {
    const {profile, currentLang} = useStore();

    const profileData: ProfileProps = {
        bio: isEmpty(profile?.bio) ? {"paragraph": txt.some_cool_bio} : profile.bio,
        socials: isEmpty(profile?.socials) ? [{
            label: txt.social_network,
            link: "@some_cool_account"
        }] : profile.socials,
    }

    return (
        <div className={classes.main}>
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
        </div>
    );
};
