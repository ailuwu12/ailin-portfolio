import Label from "../Label/Label";
import style from "./Welcome.module.css";
import { useSelector } from "react-redux";
import SocialMedia from "../SocialMedia/SocialMedia";

const Welcome = () => {
    const currentLanguage = useSelector(state => state.language)

    return(
        <div className={style.container}>
            {currentLanguage === "english" ? <h1>Hello! 👋 This is me:</h1> : <h1>¡Hola! 👋 Esta soy yo: </h1>}
            <Label type={1} text="👩‍💻 Full-Stack Web Developer"/>
            <Label type={2} text="📍 Miramar, Buenos Aires, Argentina"/>
            <Label type={3} text="💌 ailingalanterosso@gmail.com"/>
            <SocialMedia/>
        </div>
    )
}

export default Welcome