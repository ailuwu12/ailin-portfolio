import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css";
import { useLocation } from "react-router-dom";
import LanguageButton from "../LanguageButton/LanguageButton";
import { useSelector } from "react-redux";

const NavBar = () => {
    const {pathname} = useLocation();
    const language = useSelector(state => state.language)

    return(
      <div className={style.items}>
        <div className={style.container}>
  <NavLink to="/" className={style.logo}>AG</NavLink>
  <div className={style.links}>
  {language === "english"
    ? <NavLink to="/" className={pathname === "/" ? style.clicked : style.notClicked}>Home</NavLink>
    : <NavLink to="/" className={pathname === "/" ? style.clicked : style.notClicked}>Inicio</NavLink>}
    {language === "english"
    ? <NavLink to="/about" className={pathname === "/about" ? style.clicked : style.notClicked}>About</NavLink>
    : <NavLink to="/about" className={pathname === "/about" ? style.clicked : style.notClicked}>Sobre Mi</NavLink>}
    {language === "english"
    ? <NavLink to="/projects" className={pathname === "/projects" ? style.clicked : style.notClicked}>Projects</NavLink>
    : <NavLink to="/projects" className={pathname === "/projects" ? style.clicked : style.notClicked}>Proyectos</NavLink>}
    {language === "english"
    ? <NavLink to="/contact" className={pathname === "/contact" ? style.clicked : style.notClicked}>Contact Me</NavLink>
    : <NavLink to="/contact" className={pathname === "/contact" ? style.clicked : style.notClicked}>Contacto</NavLink>}
  </div>
</div>
<LanguageButton/>
</div>
    )
}

export default NavBar