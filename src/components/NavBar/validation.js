const validation = (form, language) => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexName = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ]+([\s-][A-Za-zÁÉÍÓÚáéíóúÜüÑñ]+)*$/
    const regexSubject = /^[^\n\r]{1,255}$/

    let errors = {
        name: "",
        subject: "",
        email: "",
        message: ""
    }

    if(!regexName.test(form.name) && language === "english") errors.name = "Please, enter a valid name"
    if(!regexName.test(form.name) && language === "spanish") errors.name = "Por favor, ingrese un nombre válido" 
    if(!regexSubject.test(form.subject) && language === "english") errors.subject = "Please, enter a valid subject"
    if(!regexSubject.test(form.subject) && language === "spanish") errors.subject = "Por favor, ingrese un asunto válido"
    if(!regexEmail.test(form.email) && language === "english") errors.email = "Please, enter a valid email"
    if(!regexEmail.test(form.email) && language === "spanish") errors.email = "Por favor, ingrese un email válido"
    if(form.message.length < 10 && language === "english") errors.message = "Your message is too short"
    if(form.message.length < 10 && language === "spanish") errors.message = "Tu mensaje es demasiado corto"

    return errors
}

export default validation