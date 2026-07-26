const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el nombre del Equipo Local: ", (equipoLocal) => {
  rl.question(`Goles anotados por ${equipoLocal}: `, (golesLocal) => {
    rl.question("Ingrese el nombre del Equipo Visitante: ", (equipoVisitante) => {
      rl.question(`Goles anotados por ${equipoVisitante}: `, (golesVisitante) => {
        
        const totalGoles = Number(golesLocal) + Number(golesVisitante);
        
        console.log("\n--------------------------------------------------");
        console.log("⚽ FUTDATA ANALYTICS - REPORTE FINAL DE ENCUENTRO");
        console.log("--------------------------------------------------");
        console.log(`Partido: ${equipoLocal} vs ${equipoVisitante}`);
        console.log(`Marcador Final: ${golesLocal} - ${golesVisitante}`);
        console.log(`Total de anotaciones en el encuentro: ${totalGoles}`);
        console.log("--------------------------------------------------");
        
        rl.close();
      });
    });
  });
});