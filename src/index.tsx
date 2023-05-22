import React from 'react';
import ReactDOM from 'react-dom/client';
import {isEmpty} from "lodash";
import {BrowserRouter} from "react-router-dom";
import {txt} from "./ui/assets/txt/txt";
import {store} from "./services/store";
import {App} from './App';
import {Provider} from "react-redux";

const isTxtEmpty = isEmpty(txt);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.Fragment>
        {/* If there is no i18n csv file */}
        {isTxtEmpty && (404)}
        <Provider store={store}>
            {/*<React.StrictMode>*/}
            <BrowserRouter>
                <App/>
            </BrowserRouter>
            {/*</React.StrictMode>*/}
        </Provider>
    </React.Fragment>
);
