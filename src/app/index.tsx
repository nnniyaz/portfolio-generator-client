import {Routing} from "../pages";
import { withProviders } from "./providers";
import './index.scss';

export const App = () => {
    return (
        <div className={"layout"}>
            <div className={"layout__container"}>
                <Routing/>
            </div>
        </div>
    );
}

export default withProviders(App);
