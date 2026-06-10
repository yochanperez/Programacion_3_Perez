const numero1 = document.getElementById('campo_numero1');
const numero2 = document.getElementById('campo_numero2');
const botonSumar = document.getElementById('btn_sumar');
const resultado = document.getElementById('resultado');

botonSumar.addEventListener('click', () => {
    const suma =
        Number(numero1.value) +
        Number(numero2.value);

    resultado.textContent = `Resultado: ${suma}`;
});