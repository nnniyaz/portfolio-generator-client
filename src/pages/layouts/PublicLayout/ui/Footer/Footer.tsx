import React from "react";
import {styles} from "shared/assets/styles/styles";
import classes from "./Footer.module.scss";

export function Footer({email, establishedYear}: { email: string, establishedYear: number }) {
    return (
        <div className={classes.footer}>
            <a className={styles.subParagraphLink} href={`mailto:${email}`}>
                {email}
            </a>
            <div className={styles.subParagraph}>
                {establishedYear}
            </div>
        </div>
    )
}
