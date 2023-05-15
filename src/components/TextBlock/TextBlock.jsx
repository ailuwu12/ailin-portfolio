import style from "./TextBlock.module.css";
import ailin from "../../assets/Ailin_Galante_CV.pdf"
import SoftSkills from "../SoftSkills/SoftSkills";

const TextBlock = ({ language }) => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.header}></div>
                {language === "english" ? <h1>Who am I?</h1> : <h1>¿Quién soy?</h1>}
                {language === "spanish" 
                ? <p>Me llamo Ailín Galante Rosso. Nací en Miramar, Buenos Aires, Argentina, pero actualmente me encuentro viviendo en la ciudad de Mar del Plata. Tengo 22 años. Actualmente soy Desarrolladora Full-Stack. Antes de meterme en el mundo de la programación estudié física por dos años, pero dejé esos estudios en pausa porque no me veía desarrollándome profesionalmente en ese área. Siempre me interesó la programación, especialmente el desarrollo web. Como persona nacida en los 2000, fui criada a base de horas frente a una pc, navegando por el internet. Hoy me encuentro llevando a la realidad mis ideas a través del código, luego de meses estudiando como hacerlo.
                </p>
                : <p>
                My name is Ailín Galante Rosso. I was born in Miramar, Buenos Aires, Argentina, but currently, I live in the city of Mar del Plata. I am 22 years old. I am currently a Full-Stack Developer. Before diving into the world of programming, I studied physics for two years, but I put those studies on hold because I didn't see myself professionally developing in that field. I have always been interested in programming, especially web development. As a person born in the 2000s, I was raised spending hours in front of a PC, browsing the internet. Today, I am bringing my ideas to life through code, after months of studying how to do it.
                </p>}
                <button><a href={ailin} download="ailin_galante_cv"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>{language === "spanish" ? <span>Descarga mi CV</span> : <span>Download my CV</span>}
</a></button>
            </div>
            <SoftSkills language={language}/>
        </div>
    )
}

export default TextBlock;
