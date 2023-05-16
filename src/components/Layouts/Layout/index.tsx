import React, {ReactNode} from 'react';
import classes from "./index.module.scss";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div className={classes.layout}>
            <div className={classes.layout__container}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
