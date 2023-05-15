import style from "./Technologies.module.css";
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import redux from "../../assets/redux.svg"
import node from "../../assets/node.svg"
import express from "../../assets/express.svg"
import postgresql from "../../assets/postgresql.svg"
import git from "../../assets/git.svg"
import vite from "../../assets/vite.svg"
import Cartoon from "../Cartoon/Cartoon";

const Technologies = ({ language }) => {
    return (
        <div>
            <Cartoon/>
            <div className={style.container}>
                <div className={style.header}></div>
                {language === "english" ? <h1>Tech Skills</h1> : <h1>Habilidades Técnicas</h1>}
                <div className={style.tech}>
                <div className={style.item}>
                <label>HTML5</label>
                <img src={html}/>
                </div>
                <div className={style.item}>
                <label>CSS3</label>
                <img src={css}/>
                </div>
                <div className={style.item}>
                <label>Javascript</label>
                <img src={javascript}/>
                </div>
                <div className={style.item}>
                <label>React</label>
                <img src={react}/>
                </div>
                <div className={style.item}>
                <label>Redux</label>
                <img src={redux}/>
                </div>
                <div className={style.item}>
                <label>Node.js</label>
                <img src={node}/>
                </div>
                <div className={style.item}>
                <label>Express</label>
                <img src={express}/>
                </div>
                <div className={style.item}>
                <label>PostgreSQL</label>
                <img src={postgresql}/>
                </div>
                <div className={style.item}>
                <label>Git</label>
                <img src={git}/>
                </div>
                <div className={style.item}>
                <label>Vite</label>
                <img src={vite}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;
