import React from 'react';
import Layout from "./components/Layouts/Layout";
import AppRouter from "./components/AppRouter";
import './App.scss';

function App() {
    return (
        <Layout>
            <AppRouter/>
        </Layout>
    );
}

export default App;
