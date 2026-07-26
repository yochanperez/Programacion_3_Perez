document.addEventListener("DOMContentLoaded", () => {
    const numerobase = document.getElementById('campo_base');
    const numeroaltura = document.getElementById('campo_altura');
    const boton = document.getElementById('btn');
    const resultado = document.getElementById('resultado');

    if (boton && numerobase && numeroaltura && resultado) {
        boton.addEventListener('click', () => {
            const base_altura = Number(numerobase.value) * Number(numeroaltura.value);
            const resultado_real = base_altura / 2;

            resultado.textContent = `Área de cobertura táctica: ${resultado_real} m²`;
        });
    }
});