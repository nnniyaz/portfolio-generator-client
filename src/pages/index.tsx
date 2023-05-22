import React from 'react';
import {Routes, Route, Navigate, useLocation} from "react-router-dom";

interface IRoute {
    path: string;
    component: React.ComponentType;
    name: MlString;
}

enum RouteNames {
    MAIN = '/',
    PROJECTS = '/projects',
    BLOG = '/blog',
    ARTICLES = '/articles',
    FAVOURITES = '/favourites',
}

const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, component: Main, name: txt.main},
    {path: RouteNames.PROJECTS, component: Projects, name: txt.projects},
    {path: RouteNames.BLOG, component: Blog, name: txt.blog},
    {path: RouteNames.ARTICLES, component: Research, name: txt.articles},
    {path: RouteNames.FAVOURITES, component: Favourites, name: txt.favourites},
];

export const Routing = () => {
    const location = useLocation();
    const {isAuth} = useTypedSelector(state => state.user);
    const locationPathname = location.pathname;
    const [initialLocation] = React.useState(localStorage.getItem('lastLocation') || RouteNames.MAIN);

    window.addEventListener('beforeunload', function () {
        localStorage.setItem('lastLocation', locationPathname);
    });

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
                    <Route path={'*'} element={<Navigate to={from()}/>}/>
                </Route>
            </Routes>
    );
};
