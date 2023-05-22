import React, {Suspense} from "react";
import {Layout} from "./components/Layouts/Layout";
import {Routing} from "./components/Routing";
import "./App.scss";
import {Loading} from "./components/Loading";

function App() {
    return (
        <Layout>
            <Suspense fallback={<Loading/>}>
                <Routing/>
            </Suspense>
        </Layout>
    );
}

export default App;
