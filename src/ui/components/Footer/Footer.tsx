import React from 'react';
import {styles} from "../../styles/styles";
import classes from "./Footer.module.scss";

export const Footer = ({email, establishment_year}: {email: string, establishment_year: number}) => {
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
