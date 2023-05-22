import React, {Suspense} from "react";
import {txt} from "../shared/assets/txt/txt";
import {store} from "./store";
import {isEmpty} from "lodash";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Layout} from "shared/ui/Layout";
import {Loading} from "shared/ui/Loading";
import {Routing} from "pages";
import "./index.scss";

const isTxtEmpty = isEmpty(txt);

export function App() {
    return (
        <Layout>
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<Loading/>}>
                        {isTxtEmpty ? (404) : <Routing/>}
                    </Suspense>
                </BrowserRouter>
            </Provider>
        </Layout>
    );
}
