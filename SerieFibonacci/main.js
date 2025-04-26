function calcularFibonacci(n) {
    let fibonacci = [0, 1]; 
    
    for (let i = 2; i < n; i++) { 
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
    }

    return fibonacci.slice(0, n); // Devuelve solo los primeros 'n' números
}


document.getElementById("generarBtn").addEventListener("click", function() {
    let n = parseInt(document.getElementById("numInput").value); // Obtiene el número ingresado
    let resultado = document.getElementById("resultado"); // Captura el div donde se mostrará el resultado

    if (isNaN(n) || n <= 0) { // Verifica si es un número válido
        resultado.innerText = "Ingrese un número válido";
    } else {
        resultado.innerText = "Los primeros "+ n +" números de la lista, son: \n" + calcularFibonacci(n).join(", "); // Muestra la serie en pantalla
    }
});
