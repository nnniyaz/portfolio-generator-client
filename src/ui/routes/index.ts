import React from "react";
import {txt} from "../assets/txt/txt";
import {MlString} from "../../domain/base/mlString";
import {Main} from "../pages/public/Main";
import {Projects} from "../pages/public/Projects";
import {Blog} from "../pages/public/Blog";
import {Research} from "../pages/public/Research";
import {Favourites} from "../pages/public/Favourites";

interface IRoute {
    path: string;
    component: React.ComponentType;
    name: MlString;
}

export enum RouteNames {
    MAIN = '/',
    PROJECTS = '/projects',
    BLOG = '/blog',
    ARTICLES = '/articles',
    FAVOURITES = '/favourites',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, component: Main, name: txt.main},
    {path: RouteNames.PROJECTS, component: Projects, name: txt.projects},
    {path: RouteNames.BLOG, component: Blog, name: txt.blog},
    {path: RouteNames.ARTICLES, component: Research, name: txt.articles},
    {path: RouteNames.FAVOURITES, component: Favourites, name: txt.favourites},
];
