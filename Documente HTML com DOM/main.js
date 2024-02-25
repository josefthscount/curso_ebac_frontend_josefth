const form = document.getElementById('form-ajudar');
const nomeUsuario = document .getElementById('nome-usuario');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray .length >= 2;
}

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    const numeroContaUsuario = document .getElementById('numero-conta');
    const valorAjudar = document .getElementById('valor-ajudar');
    const mensagemSucesso = `Ajuda de: <b>${valorAjuda.value}</b> ajuda para o usuario: <b>${nomeUsuario.value}</b> - conta: <b>${numeroContaUsuario.value}</b>`;

    formEValido = validaNome(nomeUsuario.value)
    if (formEValido) {
        const containerMensagemSucesso = document .querySelector(' .success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block;'

        nomeUsuario.value = ' ';
        numeroContaUsuario.value = ' ';
        valorAjudar.value = ' ';
    } else{
        nomeUsuario.style.border = '1px solid red';
        document .querySelector(' .success-message') .style.display = 'block';
    }
})

nomeUsuario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeUsuario.classList .add('error');
        document.querySelector(' .error-message'). style.display = 'block';
    } else {
        nomeUsuario.classList .remove('error');
        document.querySelector(' .error-message').style.display ='none';
    }
})