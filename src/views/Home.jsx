import Welcome from "../components/Welcome/Welcome"
import Image from "../components/Image/Image"
import style from "./Home.module.css"

const Home = () => {
    return(
        <div className={style.content}>
            <Welcome/>
            <Image/>
        </div>
    )
}

export default Home