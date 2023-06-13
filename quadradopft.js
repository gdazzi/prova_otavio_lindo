function quadradopft(numero) {
    if (numero < 0) {
        return false;
    }
    var raiz = Math.sqrt(numero);
    return raiz % 1 === 0;
}