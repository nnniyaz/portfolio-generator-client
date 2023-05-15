import React from 'react';
import AppRouter from "./components/AppRouter";
import MainLayout from "./components/Layouts/PublicLayout";
import './App.scss';

function App() {
    return (
        <MainLayout>
            <AppRouter/>
        </MainLayout>
    );
}

export default App;
