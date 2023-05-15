import style from "./Label.module.css"

const Label = ({type, text}) => {
    if(type === 1){
        return(
            <div className={style.container1}>
                <p>{text}</p>
            </div>
        )
    }else if(type === 2){
        return(
            <div className={style.container2}>
                <p>{text}</p>
            </div>
        )
    }else if(type === 3){
        return(
            <div className={style.container3}>
                <p>{text}</p>
            </div>
        )
    }
}

export default Label