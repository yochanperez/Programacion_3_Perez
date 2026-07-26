document.addEventListener("DOMContentLoaded", () => {
    const baseMayor = document.getElementById('baseMayor');
    const baseMenor = document.getElementById('baseMenor');
    const altura = document.getElementById('altura');
    const btnCalcular = document.getElementById('btn_calculo_area');
    const resultado = document.getElementById('resultado');
    const error = document.getElementById('error');

    if (btnCalcular && baseMayor && baseMenor && altura && resultado && error) {
        btnCalcular.addEventListener('click', () => {
            error.textContent = '';
            
            const baseMayorNumerico = parseFloat(baseMayor.value);
            const baseMenorNumerico = parseFloat(baseMenor.value);
            const alturaNumerico = parseFloat(altura.value);

            if (isNaN(baseMayorNumerico) || isNaN(baseMenorNumerico) || isNaN(alturaNumerico)) {
                error.textContent = 'Por favor ingresa valores numéricos';
                return;
            }
            if (baseMayorNumerico <= 0 || baseMenorNumerico <= 0 || alturaNumerico <= 0) {
                error.textContent = 'Por favor ingresa valores mayores a cero';
                return;
            }

            const area = ((baseMayorNumerico + baseMenorNumerico) / 2) * alturaNumerico;
            resultado.textContent = `Área de cobertura táctica: ${area.toFixed(2)} m²`;
        });
    }
});