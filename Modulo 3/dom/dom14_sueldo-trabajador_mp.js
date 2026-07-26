function fmt(valor) {
   return '$ ' + valor.toFixed(2);
}

function calcularSueldo() {
   const elSueldoBase = document.getElementById('inSueldoBase');
   const elBono = document.getElementById('inBonoAntigüedad');
   const elIESS = document.getElementById('inIESS');
   const elPrestamo = document.getElementById('inPrestamo');

   if (!elSueldoBase || !elBono || !elIESS || !elPrestamo) return;

   const sueldoBase = parseFloat(elSueldoBase.value);
   const bono = parseFloat(elBono.value);
   const porcentajeIESS = parseFloat(elIESS.value);
   const prestamo = parseFloat(elPrestamo.value);

   const divError = document.getElementById('error');
   const divResultado = document.getElementById('resultado');

   if (divError) divError.style.display = 'none';
   if (divResultado) divResultado.style.display = 'none';

   if (isNaN(sueldoBase) || sueldoBase <= 0) {
       if (divError) {
           divError.textContent = 'Ingresa un sueldo base válido (mayor que cero).';
           divError.style.display = 'block';
       }
       return;
   }

   if (isNaN(porcentajeIESS) || porcentajeIESS < 0 || porcentajeIESS > 100) {
       if (divError) {
           divError.textContent = 'El porcentaje de retención debe estar entre 0 y 100.';
           divError.style.display = 'block';
       }
       return;
   }

   const bonoVal = isNaN(bono) ? 0 : Math.max(0, bono);
   const prestamoVal = isNaN(prestamo) ? 0 : Math.max(0, prestamo);

   const totalIngresos = sueldoBase + bonoVal;
   const deduccionIESS = sueldoBase * (porcentajeIESS / 100);
   const totalDeducciones = deduccionIESS + prestamoVal;
   const sueldoNeto = totalIngresos - totalDeducciones;

   const rSueldoBase = document.getElementById('rSueldoBase');
   const rBono = document.getElementById('rBono');
   const rTotalIngresos = document.getElementById('rTotalIngresos');
   const rPorcentajeIESS = document.getElementById('rPorcentajeIESS');
   const rIESS = document.getElementById('rIESS');
   const rPrestamo = document.getElementById('rPrestamo');
   const rTotalDeducciones = document.getElementById('rTotalDeducciones');
   const spanNeto = document.getElementById('rSueldoNeto');

   if (rSueldoBase) rSueldoBase.textContent = fmt(sueldoBase);
   if (rBono) rBono.textContent = fmt(bonoVal);
   if (rTotalIngresos) rTotalIngresos.textContent = fmt(totalIngresos);
   if (rPorcentajeIESS) rPorcentajeIESS.textContent = porcentajeIESS.toFixed(2);
   if (rIESS) rIESS.textContent = '- ' + fmt(deduccionIESS);
   if (rPrestamo) rPrestamo.textContent = '- ' + fmt(prestamoVal);
   if (rTotalDeducciones) rTotalDeducciones.textContent = '- ' + fmt(totalDeducciones);

   if (spanNeto) {
       spanNeto.textContent = fmt(sueldoNeto);
       spanNeto.style.color = sueldoNeto >= 0 ? '#4ade80' : '#fca5a5';
   }

   if (divResultado) divResultado.style.display = 'block';
}

function limpiar() {
   ['inSueldoBase', 'inBonoAntigüedad', 'inPrestamo'].forEach(id => {
       const el = document.getElementById(id);
       if (el) el.value = '';
   });
   const elIESS = document.getElementById('inIESS');
   if (elIESS) elIESS.value = '9.45';

   const divError = document.getElementById('error');
   const divResultado = document.getElementById('resultado');
   const elSueldoBase = document.getElementById('inSueldoBase');

   if (divError) divError.style.display = 'none';
   if (divResultado) divResultado.style.display = 'none';
   if (elSueldoBase) elSueldoBase.focus();
}

document.addEventListener("DOMContentLoaded", () => {
   ['inSueldoBase', 'inBonoAntigüedad', 'inIESS', 'inPrestamo'].forEach(id => {
       const el = document.getElementById(id);
       if (el) {
           el.addEventListener('keydown', e => {
               if (e.key === 'Enter') calcularSueldo();
           });
       }
   });
});