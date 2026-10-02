const formulario = document.querySelector("#form-login");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const mensagem = document.querySelector("#mensagem");
const botaoMostrarSenha = document.querySelector("#mostrar-senha");
const linkEsqueciSenha = document.querySelector("#esqueci-senha");

botaoMostrarSenha.addEventListener("click", () => {
    const exibindo = campoSenha.type === "password";
    campoSenha.type = exibindo ? "text" : "password";
    botaoMostrarSenha.textContent = exibindo ? "Ocultar" : "Mostrar";
    botaoMostrarSenha.setAttribute("aria-label", exibindo ? "Ocultar senha" : "Mostrar senha");
    botaoMostrarSenha.setAttribute("aria-pressed", String(exibindo));
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensagem.textContent = "";

    if (!campoEmail.validity.valid) {
        mensagem.textContent = "Digite um e-mail válido.";
        campoEmail.focus();
        return;
    }

    if (campoSenha.value.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        campoSenha.focus();
        return;
    }

    mensagem.style.color = "#245c2a";
    mensagem.textContent = "Dados válidos! O acesso precisa ser conectado a um sistema de contas.";
});

linkEsqueciSenha.addEventListener("click", (evento) => {
    evento.preventDefault();
    mensagem.style.color = "#444";
    mensagem.textContent = "Entre em contato com a loja para redefinir sua senha.";
});
