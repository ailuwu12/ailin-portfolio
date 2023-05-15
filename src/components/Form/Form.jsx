import style from "./Form.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import validation from "../NavBar/validation";

const Form = () => {
    const language = useSelector(state => state.language)

    const [form, setForm] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const [valid, setValid] = useState(true)

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, 
        [property]: value})

        setErrors(validation({...form, [property]: value}, language))

        if(validation({...form, [property]: value}, language).name === ""
        && validation({...form, [property]: value}, language).subject === ""
        && validation({...form, [property]: value}, language).email === ""
        && validation({...form, [property]: value}, language).message === "") setValid(false)

        else setValid(true)
    }

    return(
        <form action="https://formsubmit.co/ailingalanterosso@gmail.com" method="POST" className={style.contact}>
            {language === "english"
            ? <h1>Send Me An Email 💌</h1>
            : <h1>Envíame Un Email 💌</h1>}
            <div className={style.container}>
            <div className={style.data}>
                {language === "english"
                ? <div className={style.input}>
                <label>Name:</label>
                <input name="name" type="text" placeholder="Name..." value={form.name} onChange={handleChange}/>
                </div>
                : <div className={style.input}>
                <label>Nombre:</label>
                <input name="name" type="text" placeholder="Nombre..." value={form.name} onChange={handleChange}/>
                </div>}
                <p className={style.error}>{errors.name}</p>

                {language === "english"
                ? <div className={style.input}>
                <label>Subject:</label>
                <input name="subject" type="text" placeholder="Subject..." value={form.subject} onChange={handleChange}/>
                </div>
                : <div className={style.input}>
                <label>Asunto:</label>
                <input name="subject" type="text" placeholder="Asunto..." value={form.subject} onChange={handleChange}/>
                </div>}
                <p className={style.error}>{errors.subject}</p>

                <div className={style.input}>
                    <label>Email:</label>
                    <input name="email" type="text" placeholder="Email..." value={form.email} onChange={handleChange}/>
                </div>
                <p className={style.error}>{errors.email}</p>

            </div>

            {language === "english"
            ? <div className={style.message}>
            <label>Message:</label>
            <textarea type="text" placeholder="Message..." value={form.message} name="message" onChange={handleChange}/>
            </div>
            : <div className={style.message}>
            <label>Mensaje:</label>
            <textarea type="text" placeholder="Mensaje..." value={form.message} name="message" onChange={handleChange}/>
            </div>}
            </div>
            <div><p className={style.messageError}>{errors.message}</p></div>
                {language === "english"
                ? <button type="submit" disabled={valid}>Send Email</button>
                : <button type="submit" disabled={valid}>Enviar Email</button>}
                <input type="hidden" name="_next" value="https://ailingportfolio.vercel.app/contact"/>
                <input type="hidden" name="_captcha" value="false"/>
        </form>
    )
}

export default Form