document.addEventListener("DOMContentLoaded", () => {
    const numero1 = document.getElementById('campo_numero1');
    const numero2 = document.getElementById('campo_numero2');
    const botonSumar = document.getElementById('btn-sumar');
    const resultado = document.getElementById('resultado');

    if (botonSumar && numero1 && numero2 && resultado) {
        botonSumar.addEventListener('click', () => {
            const suma = Number(numero1.value) + Number(numero2.value);
            resultado.textContent = `Total acumulado: ${suma}`;
        });
    }
});