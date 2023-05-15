import ailin from "../../assets/ailin.jpg";
import style from "./Image.module.css"

const Image = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.titleContainer}>
        <h1>✨ AILÍN GALANTE</h1>
        <span>↴</span>
      </div>
      <div className={style.content}>
        <img src={ailin} alt="Ailin" className={style.ailin} />
      </div>
    </div>
  )
}

export default Image