const campoRespuesta = document.getElementById("respuesta");
const botonComprobar = document.getElementById("comprobar");
const mensaje = document.getElementById("mensaje");
const pregunta = document.getElementById("pregunta");
const datoLugar = document.getElementById("dato-lugar");
const enlaceFuente = document.getElementById("enlace-fuente");
const ubicacion = document.getElementById("ubicacion");
const paradas = Array.from(document.querySelectorAll(".parada"));
const contadorReto = document.getElementById("contador-reto");
const puntuacion = document.getElementById("puntuacion");
const record = document.getElementById("record");
const barraProgreso = document.getElementById("progreso");
const medallas = document.getElementById("medallas");
const botonReiniciar = document.getElementById("jugar-de-nuevo");

const claveRecord = "rutaPorHondurasRecord";
const bancoRetos = [
  [
    {
      dato: "El Parque Nacional La Tigra tiene 240 km² y es una fuente importante de agua para Tegucigalpa.",
      pregunta: "Un proyecto estudia el 12,5 % de las 240 km² de La Tigra. ¿Cuántos kilómetros cuadrados estudia?",
      respuesta: 30,
      pista: "Convierte 12,5 % en 0,125 y multiplícalo por 240. También puedes notar que 12,5 % es un octavo.",
      explicacion: "12,5 % de 240 = 0,125 × 240 = 30 km².",
      fuente: "https://www.honduras.travel/naturaleza.php"
    },
    {
      dato: "El Parque Nacional La Tigra tiene 240 km² y es una fuente importante de agua para Tegucigalpa.",
      pregunta: "Una zona de estudio cubre el 7,5 % de las 240 km² de La Tigra. ¿Cuántos kilómetros cuadrados cubre?",
      respuesta: 18,
      pista: "Escribe 7,5 % como 0,075 y calcula 0,075 × 240.",
      explicacion: "7,5 % de 240 = 0,075 × 240 = 18 km².",
      fuente: "https://www.honduras.travel/naturaleza.php"
    }
  ],
  [
    {
      dato: "Marcala, en La Paz, da nombre a Café Marcala, una denominación de origen hondureña.",
      pregunta: "Una cooperativa de Marcala empaca 96 kg de café en bolsas de 0,48 kg. ¿Cuántas bolsas completas obtiene?",
      respuesta: 200,
      pista: "Divide el peso total entre el peso de cada bolsa: 96 ÷ 0,48. Multiplica ambos números por 100 para quitar los decimales.",
      explicacion: "96 ÷ 0,48 = 9.600 ÷ 48 = 200 bolsas.",
      fuente: "https://www.docafemarcala.org/area-tecnica/proceso-de-certificacion/"
    },
    {
      dato: "Marcala, en La Paz, da nombre a Café Marcala, una denominación de origen hondureña.",
      pregunta: "Al tostar un lote de 160 kg de café de Marcala, se pierde el 12,5 % de su peso. ¿Cuántos kilogramos quedan?",
      respuesta: 140,
      pista: "12,5 % es un octavo. Calcula 160 ÷ 8 y réstalo de 160.",
      explicacion: "12,5 % de 160 = 20 kg; quedan 160 − 20 = 140 kg.",
      fuente: "https://www.docafemarcala.org/area-tecnica/proceso-de-certificacion/"
    }
  ],
  [
    {
      dato: "La Catedral de Santa María de Comayagua alberga uno de los relojes más antiguos de América.",
      pregunta: "En 2,4 horas, ¿cuántos grados gira la manecilla de las horas del reloj?",
      respuesta: 72,
      pista: "La manecilla da una vuelta de 360° en 12 horas. Calcula primero cuántos grados recorre en una hora.",
      explicacion: "La manecilla recorre 30° por hora; 30 × 2,4 = 72°.",
      fuente: "https://www.honduras.travel/ciudades-coloniales.php"
    },
    {
      dato: "La Catedral de Santa María de Comayagua alberga uno de los relojes más antiguos de América.",
      pregunta: "¿Cuántos grados gira la manecilla de las horas en 3 horas y 20 minutos?",
      respuesta: 100,
      pista: "Convierte 20 minutos en un tercio de hora. La manecilla recorre 30° por hora.",
      explicacion: "3 horas y 20 minutos son 10/3 horas; (10/3) × 30° = 100°.",
      fuente: "https://www.honduras.travel/ciudades-coloniales.php"
    }
  ],
  [
    {
      dato: "San Pedro Sula, en Cortés, es conocida como la ciudad industrial de Honduras.",
      pregunta: "Una fábrica tiene un costo fijo de L 18.000 y gasta L 120 por cada pieza. Si el costo total es L 57.600, ¿cuántas piezas produjo?",
      respuesta: 330,
      pista: "Plantea 18.000 + 120x = 57.600. Resta 18.000 y divide el resultado entre 120.",
      explicacion: "18.000 + 120x = 57.600; entonces x = 39.600 ÷ 120 = 330 piezas.",
      fuente: "https://honduras.travel/negocios.php"
    },
    {
      dato: "San Pedro Sula, en Cortés, es conocida como la ciudad industrial de Honduras.",
      pregunta: "Una fábrica tiene un costo fijo de L 22.500 y gasta L 150 por cada pieza. Si el costo total es L 64.500, ¿cuántas piezas produjo?",
      respuesta: 280,
      pista: "Plantea 22.500 + 150x = 64.500. Resta 22.500 y divide el resultado entre 150.",
      explicacion: "22.500 + 150x = 64.500; entonces x = 42.000 ÷ 150 = 280 piezas.",
      fuente: "https://honduras.travel/negocios.php"
    }
  ],
  [
    {
      dato: "La Ceiba es la puerta de entrada a lugares naturales como el Parque Nacional Pico Bonito, donde se ofrece una ruta de canopy.",
      pregunta: "En un modelo geométrico de una ruta de canopy en Pico Bonito, el cable recorre 150 m en horizontal y 80 m en vertical. ¿Cuánto mide en línea recta?",
      respuesta: 170,
      pista: "Usa el teorema de Pitágoras: longitud² = 150² + 80². Después calcula la raíz cuadrada.",
      explicacion: "√(150² + 80²) = √28.900 = 170 m.",
      fuente: "https://honduras.travel/aventura.php"
    },
    {
      dato: "La Ceiba es la puerta de entrada a lugares naturales como el Parque Nacional Pico Bonito, donde se ofrece una ruta de canopy.",
      pregunta: "En otro modelo de canopy en Pico Bonito, el cable cubre 90 m en horizontal y 120 m en vertical. ¿Cuánto mide en línea recta?",
      respuesta: 150,
      pista: "Usa el teorema de Pitágoras: longitud² = 90² + 120². Luego calcula la raíz cuadrada.",
      explicacion: "√(90² + 120²) = √22.500 = 150 m.",
      fuente: "https://honduras.travel/aventura.php"
    }
  ]
];

const ultimaVariante = Array(bancoRetos.length).fill(-1);
let retos = [];
let indiceReto = 0;
let puntos = 0;
let intentosActuales = 0;
let erroresPartida = 0;
let mejorPuntuacion = leerRecord();

function leerRecord() {
  try {
    return Number(localStorage.getItem(claveRecord)) || 0;
  } catch {
    return 0;
  }
}

function guardarRecord() {
  try {
    localStorage.setItem(claveRecord, String(mejorPuntuacion));
  } catch {
    // El juego sigue funcionando aunque el navegador no permita guardar el récord.
  }
}

function elegirRetos() {
  return bancoRetos.map((variantes, parada) => {
    let variante = Math.floor(Math.random() * variantes.length);
    if (variantes.length > 1 && variante === ultimaVariante[parada]) {
      variante = (variante + 1) % variantes.length;
    }
    ultimaVariante[parada] = variante;
    return variantes[variante];
  });
}

function actualizarProgreso() {
  contadorReto.textContent = indiceReto >= retos.length
    ? `Retos completados: ${retos.length} de ${retos.length}`
    : `Reto ${indiceReto + 1} de ${retos.length}`;
  puntuacion.textContent = `Puntos: ${puntos} / ${retos.length * 10}`;
  record.textContent = `Récord personal: ${mejorPuntuacion}`;
  barraProgreso.value = indiceReto;
}

function actualizarUbicacion(indice) {
  paradas.forEach((parada, posicion) => {
    parada.classList.toggle("actual", posicion === indice);
    if (posicion === indice) {
      parada.setAttribute("aria-current", "step");
    } else {
      parada.removeAttribute("aria-current");
    }
  });

  const nombre = paradas[indice].querySelector(".lugar").textContent;
  const departamento = paradas[indice].querySelector(".departamento").textContent;
  ubicacion.innerHTML = `<strong>Estás aquí:</strong> ${nombre}, ${departamento}.`;
}

function mostrarReto(indice) {
  datoLugar.textContent = retos[indice].dato;
  pregunta.textContent = retos[indice].pregunta;
  enlaceFuente.href = retos[indice].fuente;
}

function mostrarMedallas() {
  const ganadas = ["🏅 Explorador de Honduras: completaste las cinco paradas."];
  if (erroresPartida === 0) {
    ganadas.push("🌟 Ruta perfecta: acertaste los cinco retos al primer intento.");
  } else {
    ganadas.push("💪 Perseverancia: seguiste adelante después de recibir pistas.");
  }
  medallas.textContent = ganadas.join("  ·  ");
}

function iniciarPartida() {
  retos = elegirRetos();
  indiceReto = 0;
  puntos = 0;
  intentosActuales = 0;
  erroresPartida = 0;
  mostrarReto(0);
  actualizarUbicacion(0);
  actualizarProgreso();
  campoRespuesta.value = "";
  campoRespuesta.disabled = false;
  botonComprobar.disabled = false;
  botonReiniciar.hidden = true;
  mensaje.textContent = "Escribe tu respuesta y pulsa “Comprobar”.";
  medallas.textContent = "Completa la ruta para ganar medallas.";
}

botonComprobar.addEventListener("click", () => {
  const respuesta = campoRespuesta.value;

  if (respuesta === "") {
    mensaje.textContent = "Escribe una respuesta antes de continuar.";
    campoRespuesta.focus();
    return;
  }

  if (Number(respuesta) === retos[indiceReto].respuesta) {
    const retoResuelto = retos[indiceReto];
    puntos += intentosActuales === 0 ? 10 : 5;
    indiceReto += 1;
    intentosActuales = 0;
    actualizarProgreso();

    if (indiceReto >= retos.length) {
      if (puntos > mejorPuntuacion) {
        mejorPuntuacion = puntos;
        guardarRecord();
      }
      actualizarProgreso();
      mostrarMedallas();
      mensaje.textContent = `¡Ruta completada! ${retoResuelto.explicacion} Obtuviste ${puntos} de ${retos.length * 10} puntos.`;
      botonComprobar.disabled = true;
      campoRespuesta.disabled = true;
      botonReiniciar.hidden = false;
      return;
    }

    actualizarUbicacion(indiceReto);
    mostrarReto(indiceReto);
    campoRespuesta.value = "";
    mensaje.textContent = `¡Correcto! ${retoResuelto.explicacion} Avanzaste hasta ${paradas[indiceReto].querySelector(".lugar").textContent}.`;
  } else {
    intentosActuales += 1;
    erroresPartida += 1;
    mensaje.textContent = `Todavía no. Pista: ${retos[indiceReto].pista}`;
  }
});

botonReiniciar.addEventListener("click", iniciarPartida);

record.textContent = `Récord personal: ${mejorPuntuacion}`;
iniciarPartida();
