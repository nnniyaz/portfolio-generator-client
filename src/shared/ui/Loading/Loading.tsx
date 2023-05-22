import classes from "./Loading.module.scss";

interface LoadingProps {
    width?: string;
    height?: string;
    innerWidth?: string;
    innerHeight?: string;
}

export function Loading({width = "100%", height = "100%", innerWidth = "48px", innerHeight = "48px"}: LoadingProps) {
    return (
        <div className={classes.loading__wrapper} style={{width: width, height: height}}>
            <span className={classes.loading} style={{width: innerWidth, height: innerHeight}}></span>
        </div>
    )
}
