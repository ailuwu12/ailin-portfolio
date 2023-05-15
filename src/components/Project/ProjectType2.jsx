import style from "./Project.module.css";
import { useSelector } from "react-redux";

const ProjectType2 = ({image, spanishText, englishText, deploy, repo, title}) => {

    const language = useSelector(state => state.language)


    return(
        <div className={style.project2}>
            <img src={image}/>
            <div className={style.textBlock2}>
                <div className={style.header2}></div>
                <h1>{title}</h1>
                 {language === "spanish"
                 ? <p>{spanishText}</p>
                : <p>{englishText}</p>}
                <div className={style.links2}>
                <button><a href={deploy} target="_blank">Deploy</a></button>
                {language === "spanish"
                ? <button><a href={repo} target="_blank">Repositorio</a></button>
                : <button><a href={repo} target="_blank">Repository</a></button>}
                </div>
            </div>
        </div> 
    )
}

export default ProjectType2