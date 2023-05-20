import React from 'react';
import {Layout} from "./ui/components/Layouts/Layout";
import {AppRouter} from "./ui/components/AppRouter";
import './App.scss';

export const App = () => {
    return (
        <Layout>
            <AppRouter/>
        </Layout>
    );
}
