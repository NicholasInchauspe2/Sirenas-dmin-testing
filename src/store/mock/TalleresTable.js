const talleresMock = [];

function generateRandomName() {
  const names = ["Taller"];
  const randomNumber = Math.floor(Math.random() * 1000); // Genera un número aleatorio entre 0 y 999
  return `${names} ${randomNumber}`;
}




// Función para generar un ID aleatorio
function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}




function generarFechasAleatoriasConPeriodoUnMes() {
  // Función auxiliar para formatear la fecha como "dd/mm/yyyy"
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Generar una fecha aleatoria dentro del último año
  const fechaInicio = new Date(
    fechaActual.getFullYear() - 1 + Math.floor(Math.random() * 365)
  );

  // Agregar un mes a la fecha de inicio para obtener la fecha de finalización
  const fechaFinalizacion = new Date(fechaInicio);
  fechaFinalizacion.setMonth(fechaFinalizacion.getMonth() + 1);

  return {
    fechaInicio: formatDate(fechaInicio),
    fechaFinalizacion: formatDate(fechaFinalizacion),
  };
}




// Numero random
function generateRandomNumber() {
  return Math.floor(Math.random() * 15000) + 1;
}




// Generar talleres aleatorios
for (let i = 0; i < 60; i++) {
  const taller = {
    id: generateRandomId(),
    name: generateRandomName(),
    fechaInicio: generarFechasAleatoriasConPeriodoUnMes().fechaInicio,
    fechaFinalizacion:
      generarFechasAleatoriasConPeriodoUnMes().fechaFinalizacion,
    cantidadDeUsuarios: generateRandomNumber(),
  };
  talleresMock.push(taller);
}

export default talleresMock;
