import { useSelector } from "react-redux";
import Site from "../components/Site/Site";
import Technologies from "../components/Technologies/Technologies";
import TextBlock from "../components/TextBlock/TextBlock";
import styles from "./About.module.css"

const About = () => {
    const currentLanguage = useSelector(state => state.language)

    return(
        <div>
            <div className={styles.container}>
                <TextBlock language={currentLanguage}/>
                <Technologies language={currentLanguage}/>
            </div>
            <Site language={currentLanguage}/>
        </div>
    )
}

export default About