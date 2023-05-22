import React, {useEffect} from "react";
import {styles} from "../../../styles/styles";
import {txt} from "../../../assets/txt/txt";
import {useTypedSelector} from "../../../../../services/store/hooks/useTypedSelector";
import {useActions} from "../../../../../services/store/hooks/useActions";
import {isEmpty} from "lodash";
import classes from "./index.module.scss";
import {IProfile} from "../../../../models/IProfile";

interface IProfileData {
    bio: IProfile["bio"];
    socials: IProfile["socials"];
}

const Main = () => {
    const {currentLang} = useTypedSelector(state => state.system);
    const {profile} = useTypedSelector(state => state.profile);
    const {getProfile} = useActions();

    const profileData: IProfileData = {
        bio: isEmpty(profile?.bio) ? {"paragraph": txt.some_cool_bio} : profile.bio,
        socials: isEmpty(profile?.socials) ? [{
            label: txt.social_network,
            link: "@some_cool_account"
        }] : profile.socials,
    }

    useEffect(() => {
        if (!isEmpty(profile)) return;

        const controller = new AbortController();
        getProfile(controller);
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.main}>
            <div className={classes.container}>

                {Object.keys(profileData.bio).map((key) => (
                    <p className={styles.paragraph} key={key}>{profileData.bio[key]?.[currentLang]}</p>
                ))}
                {/*<ul className={classes.socials}>*/}
                {/*    {*/}
                {/*        profileData.socials.map((social, index) => (*/}
                {/*            <li key={index}>*/}
                {/*                <a className={styles.link} href={social.link} target="_blank" rel="noreferrer">*/}
                {/*                    {social.label?.[currentLang]}*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</ul>*/}
            </div>
        </div>
    );
};

export default Main;
