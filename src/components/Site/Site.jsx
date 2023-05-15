import style from "./Site.module.css"

const Site = ({language}) => {
    return(
        <div>
            <div className={style.container}>
                <div className={style.header}></div>
                {language === "english" ? <h1>About This Site</h1> : <h1>Sobre Este Sitio</h1>}
                {language === "spanish" 
                ? <p>Este sitio web es una Single Page Application (SPA) construida utilizando React.js y Vite, con un toque de Redux.js para el botón de cambio de idioma. El estilo se mantiene simple con HTML/CSS puro, mientras que las imágenes se obtienen de plataformas confiables como Svgrepo y Pinterest. El formulario de contacto fue posible gracias a la ayuda de una API externa llamada Formsubmit, y se han implementado validaciones de Javascript a través de los estados de React.
                </p>
                : <p>
                This website is a Single Page Application (SPA) built using React.js and Vite, with a touch of Redux.js for the language switch button. The styling is kept simple with pure HTML/CSS, while the images are sourced from reliable platforms such as Svgrepo and Pinterest. The contact form was made possible with the help of an external API called Formsubmit, and I've implemented Javascript validations through React states to ensure a smooth user experience.
                </p>}
            </div>
            </div>
    )
}

export default Site