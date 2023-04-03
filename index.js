function validarEmail() {
    const emailValido = validoEmail();
    document.getElementById("button-recuperar-senha").disabled = !emailValido;

    const passwordValido = validoPassword();
    document.getElementById("button-entrar").disabled = !emailValido || !passwordValido;
    
    function validoEmail() {
        const email = document.getElementById("login-email").values;
        if (!email) {
            return false;
        }
        return validarEmail(email);
    }    
    
    function validoPassword() {
        const email = document.getElementById("login-password").values;
        if (!password) {
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}
