let login = "46275435810";
let senha = "123456";

console.log(login)
console.log(senha)

function conferirLogin () {
    let loginInput = document.getElementById('emailCPF').value;
    let senhaInput = document.getElementById('senha').value;

    if (login === loginInput && senha === senhaInput) {
        alert('Login certo')
    } else {
        alert('Login ou senha incorretos')
    }
}