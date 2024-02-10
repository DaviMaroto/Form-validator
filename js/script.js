document.querySelector("form").addEventListener("submit", evert => {
    console.log("Enviar o formulário")
    //Não envia o formulário
    event.preventDefault()
})

const field = document.querySelectorAll("[required]") //pega todos os inputs que estão com o campo required
console.log(field)

function validateField(fields){
    function verifyErrors() {
        let foundError = false

        for (const error in fields.validity) {
            // se não tiver customError
            // Então verifica se tem erro 
            if (fields.validity[error] && !fields.validity.valid ) {
                foundError = error
            }
        }

        return foundError
    }

    function setCustomMessage(message){
        const spanError = fields.parentNode.querySelector("span.error")
       
        if(message){
        spanError.classList.add("active")
        spanError.innerHTML = message
        }else{
        spanError.classList.remove("active")
        spanError.innerHTML = ""    
        }
        
    }
    return function(){
        if(verifyErrors()){
            setCustomMessage("campo obrigatório")
        }else{
            setCustomMessage()
        }
    }
}
function customValidation(event) {

    const fields = event.target
    const validation = validateField(fields)
    
    validation()

}

for (fields of field) { //atribui um input a variavel fields
    fields.addEventListener("invalid", event => {
        // eliminar o bubble, bolinha de disparo
        event.preventDefault()

        customValidation(event)
    }) //evento invalido
    fields.addEventListener("blur", customValidation) //Blur = Foco
}