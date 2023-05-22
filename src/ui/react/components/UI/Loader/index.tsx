import React from 'react';
import classes from './index.module.scss';

const Loader = ({width = 80, height = 80}) => {
    return (
        <div className={classes.lds__roller__wrapper} style={{width: width, height: height}}>
            <div className={classes.lds__roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
