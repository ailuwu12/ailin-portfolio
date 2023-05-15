import style from "./SocialMedia.module.css";
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import twitter from "../../assets/twitter.svg"

const SocialMedia = () => {
    return(
        <div className={style.container}>
            <button><a href="https://www.linkedin.com/in/ailingalante/" target="_blank"><img src={linkedin}/></a></button>
            <button><a href="https://github.com/ailuwu12/" target="_blank"><img src={github}/></a></button>
            <button><a href="https://twitter.com/AilinGCode" target="_blank"><img src={twitter}/></a></button>
        </div>
    )
}

export default SocialMedia