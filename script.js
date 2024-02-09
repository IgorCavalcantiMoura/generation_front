let nome = window.document.getElementById('nome')
let email= document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

function  validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
    txt.innerHTML = 'Nome Inválido'
    txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
   
    if(email.value.indexOf("@") == -1 || email.value.indexOf('.')== -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
    }
}
