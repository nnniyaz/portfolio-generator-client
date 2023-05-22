import React from "react";
import classes from "./Loading.module.scss";

export const Loading = () => {
    return (
        <div className={classes.loader__wrapper}>
            <span className={classes.loader}></span>
        </div>
    )
}
