

const prompt= require('prompt-sync')();

const total_pago= prompt('¿Cúanto fue lo que pago?: ');

const miembro= prompt('¿Usted es miembro de la corporativa? (Si/No): ').toLowerCase();

if ( total_pago > 50 ){
    if (miembro=== 'si'){
    console.log('Descuento especial');
    } else{
        console.log('Descuento normal');
    }
}else{
    console.log('Aplica descuento');
}

