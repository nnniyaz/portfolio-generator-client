import {styles} from "shared/assets/styles/styles";
import {useTypedSelector} from "../../lib/hooks/useTypedSelector";
import {txt} from "../../assets/txt/txt";
import classes from "./EmptyData.module.scss";

export function EmptyData() {
    const {currentLang} = useTypedSelector(state => state.system);

    return (
        <div className={classes.empty}>
            <div className={styles.paragraph}>
                {txt.no_data[currentLang]}
            </div>
        </div>
    )
}
