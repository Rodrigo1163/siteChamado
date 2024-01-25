class ValidaLogin {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.valid = true;
        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    };
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        if (camposValidos) {
            this.formulario.submit();
            window.location.href = "suportes.html";
        }

    }
    camposSaoValidos() {
        let valid = true;
        for (let erroText of this.formulario.querySelectorAll('.error-text')) {
            erroText.remove();
        }
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `campo "${label}" não pode estar em vazio.`)
                valid = false;
            }
        }
        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const validaLogin = new ValidaLogin();