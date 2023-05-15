import notFound from "../assets/notFound.jpg";
import styles from "./NotFound.module.css";
import { useSelector } from "react-redux";

const NotFound = () => {

    const language = useSelector(state => state.language)

    return(
        <>
        {language === "spanish" ? <h1>¡Ups! Parece que esta página no existe</h1> : <h1>Oops! It looks like this page does not exist</h1>}
        <img className={styles.ailin} src={notFound}/>
        </>
    )
}

export default NotFound;