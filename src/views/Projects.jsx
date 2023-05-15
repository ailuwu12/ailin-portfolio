import { useSelector } from "react-redux"
import pi from "../assets/pi.gif"
import pf from "../assets/pf.gif"
import ProjectType1 from "../components/Project/ProjectType1"
import ProjectType2 from "../components/Project/ProjectType2"
import style from "./Projects.module.css"

const Projects = () => {
    const language = useSelector(state => state.language)

    return(
    <div className={style.page}>
    {language === "english"
    ? <h1>Take a look at my projects</h1>
    : <h1>Estos son mis proyectos</h1>}
    <ProjectType1 image={pi} spanishText="Este es mi proyecto individual de Henry Bootcamp. Se trata de una Pokedex que incluye: página de inicio, barra de navegación, barra de búsqueda, renderizado de pokemones, con filtros y paginado, página de detalle para cada pokemon individual, y un formulario de creación de pokemones con validaciones incluídas. Se utilizaron las tecnologías de React y Redux para el front-end, y express y postgreSQL para el back-end." englishText="This is my individual project for the Henry Bootcamp, which is a Pokedex with various features. It includes a homepage, navigation bar, search bar, Pokemon rendering with filters and pagination, individual detail page for each Pokemon, and a Pokemon creation form with built-in validations. To build this application, I utilized React and Redux technologies for the front-end, while for the back-end, I used express and PostgreSQL." deploy="https://pokeproyect.vercel.app/" repo="https://github.com/ailuwu12/pokemon-pi" title="Pokemon App"/>
    <ProjectType2 image={pf} spanishText="El proyecto final de Henry es un trabajo grupal, elegimos desarrollar una red social para programadores, llamada ProgramaRed. El trabajo incluye: Autenticación de terceros integrada, pasarela de pagos, filtros combinados, poder subir archivos (utilizamos Firebase), uso de local storage, sistema de puntuación, panel de administración, notificaciones por email y borrado lógico. Además usamos algunas de las ideas extra sugeridas como sistema de favoritos, un diseño responsive y la posibilidad de ser usuario Premium" englishText="For Henry's final project, our group's collective interest led us to create ProgramaRed, a social network for programmers. Our project boasts an array of impressive features, including integrated third-party authentication, payment gateway, combined filters, file upload capabilities (powered by Firebase), local storage functionality, scoring system, administration panel, email notifications, and logical deletion. Additionally, we incorporated some extra features, such as a favorites system, responsive design, and the option to become a premium user." deploy="https://front-programa-red.vercel.app" repo="https://github.com/serrsua/FRONT-ProgramaRed" title="Programared"/>
    </div>
    )
}

export default Projects 