// === CLASE ABSTRACTA DE DISPOSITIVO BIOMÉTRICO ===
class ChalecoGPS {
  private kilometros: number;
  private historialEventos: string[] = [];

  constructor(apellidoJugador: string, kmIniciales: number) {
    this.kilometros = kmIniciales;
    this.historialEventos.push(`Dispositivo activado con ${kmIniciales} km`);
    console.log(`Sensor de ${apellidoJugador} enlazado con éxito.`);
  }

  // INTERFAZ PÚBLICA
  registrarEsprint(distanciaKm: number): void {
    this.kilometros += distanciaKm;
    this.guardarRegistro(`Esprint detectado: +${distanciaKm} km`); 
    console.log(`  Métrica añadida: +${distanciaKm} km. Total: ${this.kilometros} km`);
  }

  descargarBateriaSimulada(tiempoMinutos: number): void {
    if (tiempoMinutos > 90) {
      console.log("  Alerta: El tiempo de escaneo supera el límite del partido.");
      return;
    }
    this.guardarRegistro(`Monitoreo activo por: ${tiempoMinutos} min`);
    console.log(`  Sesión cronometrada correctamente por ${tiempoMinutos} minutos.`);
  }

  obtenerKilometrosTotales(): number {
    return this.kilometros;
  }

  imprimirLogsDispositivo(): void {
    console.log("\n  Telemetría del partido:");
    this.historialEventos.forEach(log => console.log(`    ${log}`));
  }

  // MÉTODO PRIVADO (INTERNO)
  private guardarRegistro(evento: string): void {
    this.historialEventos.push(evento);
  }
}

// === INSTANCIACIÓN Y MONITOREO EN CANCHA ===
console.log("=== SISTEMA DE ABSTRACCIÓN BIOMÉTRICA ===\n");
const sensorMendoza = new ChalecoGPS("Mendoza", 8.5);

sensorMendoza.registrarEsprint(1.2);
sensorMendoza.descargarBateriaSimulada(45);
sensorMendoza.descargarBateriaSimulada(120); 

console.log(`\nDistancia final acumulada: ${sensorMendoza.obtenerKilometrosTotales()} km`);
sensorMendoza.imprimirLogsDispositivo();