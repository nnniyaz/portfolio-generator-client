import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {Loading} from "../../shared/ui/Loading";

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback={<Loading/>}>
            {component()}
        </Suspense>
    </BrowserRouter>
);
