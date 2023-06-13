function VerificacaodeSenha(senha) {
    if (senha.length < 8) {
        return false;
    }
    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;
    for (var i = 0; i < senha.length; i++) {
        var caractere = senha.charAt(i);
        if (caractere >= 'A' && caractere <= 'Z') {
            temMaiuscula = true;
        } else if (caractere >= 'a' && caractere <= 'z') {
            temMinuscula = true;
        } else if (!isNaN(caractere)) {
            temNumero = true;
        }
        if (temMaiuscula && temMinuscula && temNumero) {
            break;
        }
    }
    return temMaiuscula && temMinuscula && temNumero;
}

