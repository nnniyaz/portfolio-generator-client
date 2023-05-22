import React from "react";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import {PublicLayout} from "widgets/PublicLayout";
import {MlString} from "entities/base/mlString";
import {txt} from "shared/assets/txt/txt";
import {Main} from "./public/Main";
import {Projects} from "./public/Projects";
import {Blog} from "./public/Blog";
import {Research} from "./public/Research";
import {Favourites} from "./public/Favourites";

interface IRoute {
    path: string;
    component: React.ComponentType;
    name: MlString;
}

export enum RouteNames {
    MAIN = "/",
    PROJECTS = "/projects",
    BLOG = "/blog",
    ARTICLES = "/articles",
    FAVOURITES = "/favourites",
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, component: Main, name: txt.main},
    {path: RouteNames.PROJECTS, component: Projects, name: txt.projects},
    {path: RouteNames.BLOG, component: Blog, name: txt.blog},
    {path: RouteNames.ARTICLES, component: Research, name: txt.articles},
    {path: RouteNames.FAVOURITES, component: Favourites, name: txt.favourites},
];

export function Routing() {
    const location = useLocation();
    const {isAuth} = useTypedSelector(state => state.user);

    const locationPathname = location.pathname;
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("lastLocation", locationPathname);
    });

    const [initialLocation] = React.useState(localStorage.getItem("lastLocation") || RouteNames.MAIN);

    const from = () => {
        return initialLocation;
    };

    return (
        isAuth
            ?
            <Routes>

            </Routes>
            :
            <Routes>
                <Route element={<PublicLayout/>}>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={<route.component/>} key={route.path}/>
                    )}
                    <Route path={"*"} element={<Navigate to={from()}/>}/>
                </Route>
            </Routes>
    );
}
