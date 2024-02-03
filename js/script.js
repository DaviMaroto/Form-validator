document.querySelector("form").addEventListener("submit", evert =>  {
    console.log("Enviar o formulário")
    //Não envia o formulário
    event.preventDefault()
})

const field = document.querySelectorAll("[required]") //pega todos os inputs que estão com o campo required
console.log(field)

function customValidation(event){
    const fields = event.target

    //Verificar se existem erros
    function verifyError(){
        let foundError = false

        for(error in fields.validity)
        console.log(error)
        // return foundError
    }
verifyError()
    //Troca mensagem de required
    fields.setCustomValidity("Esse campo é obrigatório")
}
for (fields of field){ //atribui um inut a variavel fields
    fields.addEventListener("invalid", customValidation) //evento invalido
}