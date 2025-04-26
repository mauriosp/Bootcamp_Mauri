// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    const multiplo1Input = document.getElementById('multiplo1');
    const multiplo2Input = document.getElementById('multiplo2');
    const multiplo3Input = document.getElementById('multiplo3');
    const multiplo4Input = document.getElementById('multiplo4');
    const numberToCheckInput = document.getElementById('numberToCheck');
    const checkButton = document.getElementById('checkButton');
    const flowerImage = document.getElementById('flowerImage');
    const flowerName = document.getElementById('flowerName');
    const explanation = document.getElementById('explanation');
    
    
    verificarFlor();
    
    
    checkButton.addEventListener('click', verificarFlor);
    
    
    multiplo1Input.addEventListener('input', validarInput);
    multiplo2Input.addEventListener('input', validarInput);
    multiplo3Input.addEventListener('input', validarInput);
    multiplo4Input.addEventListener('input', validarInput);
    numberToCheckInput.addEventListener('input', validarInput);
    
    
    const allInputs = [multiplo1Input, multiplo2Input, multiplo3Input, multiplo4Input, numberToCheckInput];
    allInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verificarFlor();
            }
        });
    });
    
    // Función para validar entradas
    function validarInput(event) {
        const input = event.target;
        
        
        if (input.value <= 0) {
            input.value = 1;
        }
        
        
        input.value = Math.floor(input.value);
    }
    
    
    function verificarFlor() {
        // Obtener valores de los múltiplos
        const multiplo1 = parseInt(multiplo1Input.value) || 1;
        const multiplo2 = parseInt(multiplo2Input.value) || 1;
        const multiplo3 = parseInt(multiplo3Input.value) || 1;
        const multiplo4 = parseInt(multiplo4Input.value) || 1;
        const numberToCheck = parseInt(numberToCheckInput.value) || 0;
        
        
        checkButton.classList.add('button-clicked');
        setTimeout(() => {
            checkButton.classList.remove('button-clicked');
        }, 200);
        
        // Verificar si el número es múltiplo de cada valor
        const isMultiploOf1 = numberToCheck % multiplo1 === 0;
        const isMultiploOf2 = numberToCheck % multiplo2 === 0;
        const isMultiploOf3 = numberToCheck % multiplo3 === 0;
        const isMultiploOf4 = numberToCheck % multiplo4 === 0;
        
        // Contar cuántos múltiplos cumple
        const multiploCount = [isMultiploOf1, isMultiploOf2, isMultiploOf3, isMultiploOf4]
            .filter(Boolean).length;
        
        // Limpiar clases previas
        flowerImage.className = 'flower-img';
        
        // Determinar qué flor corresponde según las reglas
        let flor = 'Ninguna';
        let explanationText = '';
        
        // Verificar si es múltiplo de al menos dos valores
        if (multiploCount >= 2) {
            // Verificar las condiciones específicas
            if (isMultiploOf1 && isMultiploOf2 && isMultiploOf3 && isMultiploOf4) {
                flor = 'Violeta';
                flowerImage.classList.add('violeta');
                explanationText = `${numberToCheck} es múltiplo de los cuatro valores: ${multiplo1}, ${multiplo2}, ${multiplo3} y ${multiplo4}.`;
            } else if (isMultiploOf3 && isMultiploOf4) {
                flor = 'Rosa';
                flowerImage.classList.add('rosa');
                explanationText = `${numberToCheck} es múltiplo del tercer (${multiplo3}) y cuarto (${multiplo4}) múltiplo.`;
            } else if (isMultiploOf1 && isMultiploOf2) {
                flor = 'Margarita';
                flowerImage.classList.add('margarita');
                explanationText = `${numberToCheck} es múltiplo del primer (${multiplo1}) y segundo (${multiplo2}) múltiplo.`;
            } else {
                flor = 'Ninguna';
                flowerImage.classList.add('ninguna');
                
                // Crear explicación detallada para el caso "Ninguna"
                const multiplosList = [];
                if (isMultiploOf1) multiplosList.push(multiplo1);
                if (isMultiploOf2) multiplosList.push(multiplo2);
                if (isMultiploOf3) multiplosList.push(multiplo3);
                if (isMultiploOf4) multiplosList.push(multiplo4);
                
                explanationText = `${numberToCheck} es múltiplo de ${multiplosList.join(' y ')}, pero no cumple las condiciones específicas para ninguna flor.`;
            }
        } else {
            flor = 'Ninguna';
            flowerImage.classList.add('ninguna');
            
            if (multiploCount === 0) {
                explanationText = `${numberToCheck} no es múltiplo de ninguno de los valores ingresados.`;
            } else if (multiploCount === 1) {
                // Determinar de cuál valor es múltiplo
                let multiploValue;
                if (isMultiploOf1) multiploValue = multiplo1;
                else if (isMultiploOf2) multiploValue = multiplo2;
                else if (isMultiploOf3) multiploValue = multiplo3;
                else if (isMultiploOf4) multiploValue = multiplo4;
                
                explanationText = `${numberToCheck} es múltiplo solo de ${multiploValue}. Debe ser múltiplo de al menos dos valores.`;
            }
        }
        
        // Actualizar la interfaz con animaciones mejoradas
        flowerImage.style.opacity = 0;
        flowerName.style.opacity = 0;
        explanation.style.opacity = 0;
        
        // Resetear cualquier animación previa
        flowerImage.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            flowerImage.style.opacity = 1;
            flowerImage.style.transform = 'scale(1)';
            flowerImage.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            setTimeout(() => {
                flowerName.style.opacity = 1;
                flowerName.style.transition = 'opacity 0.5s ease-in-out';
                
                setTimeout(() => {
                    explanation.style.opacity = 1;
                    explanation.style.transition = 'opacity 0.5s ease-in-out';
                }, 250);
            }, 250);
        }, 150);
        
        // Actualizar los textos
        flowerName.textContent = flor;
        explanation.textContent = explanationText;
    }
});