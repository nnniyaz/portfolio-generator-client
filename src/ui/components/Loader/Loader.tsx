import React from 'react';
import classes from './Loader.module.scss';

export const Loader = ({width, height}: { width?: string, height?: string }) => {
    return (
        <div className={classes.loader__wrapper} style={{width: width, height: height}}>
            <span className={classes.loader}></span>
        </div>
    );
};
