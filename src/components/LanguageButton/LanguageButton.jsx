import { useSelector } from "react-redux";
import { useState } from "react";
import { changeLanguage } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const LanguageButton = () => {
    const currentLanguage = useSelector(state => state.language);
    const [language, setLanguage] = useState(currentLanguage);
    console.log(currentLanguage)
    const dispatch = useDispatch()


    const clickHandler = () => {
        if(language === "english"){
            dispatch(changeLanguage("spanish"))
            setLanguage("spanish")
        }else{
            setLanguage("english")
            dispatch(changeLanguage("english"))
        }
    }

    return(
        <button onClick={clickHandler}>
            {language === "english" ? <span>ENG</span> : <span>ESP</span>}
        </button>
    )
}

export default LanguageButton