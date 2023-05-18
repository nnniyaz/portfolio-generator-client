import React from 'react';
import classes from "./index.module.scss";
import {styles} from "../../../styles/styles";

const Footer = ({email, establishment_year}: {email: string, establishment_year: number}) => {
    return (
        <div className={classes.footer}>
            <div className={styles.subParagraphLink}>
                {email}
            </div>
            <div className={styles.subParagraph}>
                {establishment_year}
            </div>
        </div>
    );
};

export default Footer;
