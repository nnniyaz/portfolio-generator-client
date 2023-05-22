import React from "react";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import {publicRoutes, RouteNames} from "../../routes";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {PublicLayout} from "../Layouts/PublicLayout";

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
};
