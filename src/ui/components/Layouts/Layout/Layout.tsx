import React, {ReactNode} from 'react';
import classes from "./Layout.module.scss";

export const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div className={classes.layout}>
            <div className={classes.layout__container}>
                {children}
            </div>
        </div>
    );
};
