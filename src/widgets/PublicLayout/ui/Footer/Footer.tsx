import React from "react";
import {styles} from "shared/assets/styles/styles";
import classes from "./Footer.module.scss";

export function Footer({email}: { email: string }) {
    return (
        <div className={classes.footer}>
            <div className={styles.subParagraphLink}>
                {email}
            </div>
            <div className={styles.subParagraph}>
                2023
            </div>
        </div>
    )
}
