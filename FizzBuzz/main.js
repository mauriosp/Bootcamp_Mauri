function generarFizzBuzz() {
    let n = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    
    if (n < 1) {
        resultado.innerHTML = "Por favor, ingresa un número válido mayor a 0.";
        return;
    }

    let salida = "";
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            salida += "FizzBuzz\n";
        } else if (i % 3 === 0) {
            salida += "Fizz\n";
        } else if (i % 5 === 0) {
            salida += "Buzz\n";
        } else {
            salida += i + "\n";
        }
    }

    resultado.innerText = salida;
}
