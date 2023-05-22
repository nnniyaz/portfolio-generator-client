import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {txt} from "./assets/txt/txt";
import {isEmpty} from "lodash";

const isTxtEmpty = isEmpty(txt);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <React.StrictMode>
    <React.Fragment>
        {/* If there is no i18n csv file */}
        {isTxtEmpty && (404)}
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.Fragment>
    // </React.StrictMode>
);
