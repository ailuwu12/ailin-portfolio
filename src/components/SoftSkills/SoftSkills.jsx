import style from "./SoftSkills.module.css";
import creativity from "../../assets/creativity.svg"
import logic from "../../assets/logic.svg"
import teamwork from "../../assets/teamwork.svg"
import curiosity from "../../assets/curiosity.svg"
import resilience from "../../assets/resilience.svg"
import learning from "../../assets/learning.svg"


const SoftSkills = ({ language }) => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.header}></div>
                {language === "english" ? <h1>Soft Skills</h1> : <h1>Habilidades Blandas</h1>}
                <div className={style.tech}>
                <div className={style.item}>
                {language === "english" ? <label>Creativity</label> : <label>Creatividad</label>}
                <img src={creativity}/>
                </div>
                <div className={style.item}>
                {language === "english" ? <label>Adaptability</label> : <label>Adaptabilidad</label>}
                <img src={logic}/>
                </div>
                <div className={style.item}>
                {language === "english" ? <label>Teamwork</label> : <label>Trabajo en Equipo</label>}
                <img src={teamwork}/>
                </div>
                <div className={style.item}>
                {language === "english" ? <label>Curiosity</label> : <label>Curiosidad</label>}
                <img src={curiosity}/>
                </div>
                <div className={style.item}>
                {language === "english" ? <label>Resilience</label> : <label>Resiliencia</label>}
                <img src={resilience}/>
                </div>
                <div className={style.item}>
                {language === "english" ? <label>Fast Learning</label> : <label>Aprendizaje Rápido</label>}
                <img src={learning}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SoftSkills;
