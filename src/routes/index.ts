import React from "react";
import Main from "../pages/public/Main";

interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    MAIN = '/',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, component: Main},
];
