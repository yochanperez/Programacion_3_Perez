
const celsius = [0, 15, -5, 22, 37, 100, -10, 28];

const Fahrenheit= celsius
.map(c=> (c * 9/5) + 32)

console.log(Fahrenheit)


const Filtrado_f= celsius
.filter(c => c >= 0 && c < 30)

console.log(Filtrado_f)