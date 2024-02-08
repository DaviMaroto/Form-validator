document.querySelector("form").addEventListener("submit", evert => {
    console.log("Enviar o formulário")
    //Não envia o formulário
    event.preventDefault()
})

const field = document.querySelectorAll("[required]") //pega todos os inputs que estão com o campo required
console.log(field)

function customValidation(event) {
    const fields = event.target

    //Verificar se existem erros
    function verifyError() {
        let foundError = false

        for (const error in fields.validity) {
            // se não tiver customError
            // Então verifica se tem erro 
            if (error != "customError" && fields.validity[error]) {
                foundError = error
            }
        }
        return foundError
    }
    const error = verifyError()
    console.log("Error Exists", error)

    if (error) {
        fields.setCustomValidity("Esse campo é obrigatório") //Troca mensagem de required
    } else {
        fields.setCustomValidity("")
    }

}

for (fields of field) { //atribui um input a variavel fields
    fields.addEventListener("invalid", customValidation) //evento invalido
}