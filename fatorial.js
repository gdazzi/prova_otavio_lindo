function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    var resultado = 1;
    for (var i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Calcular fatorial de 1 a 10
for (var n = 1; n <= 10; n++) {
    var fatorial = calcularFatorial(n);
    console.log("Fatorial de " + n + ": " + fatorial);
}