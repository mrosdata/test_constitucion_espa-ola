const questions = [
    {
      "question": "¿Dónde reside la soberanía nacional según el Artículo 1.2 de la Constitución Española?",
      "options": [
        "En las Cortes Generales",
        "En el Gobierno",
        "En el Rey",
        "En el pueblo español"
      ],
      "answer": 3
    },
    {
      "question": "¿Qué forma política adopta el Estado español según el Artículo 1.3?",
      "options": [
        "República presidencialista",
        "Monarquía parlamentaria",
        "Federación autonómica",
        "Democracia directa"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué principio fundamental establece el Artículo 2 respecto a la unidad de la Nación española?",
      "options": [
        "Unidad divisible con autonomía condicional",
        "Unidad indisoluble con reconocimiento de autonomías",
        "Unidad federal con soberanía compartida",
        "Unidad supeditada a los Estatutos de Autonomía"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué lengua es oficial en todo el Estado según el Artículo 3.1, con el deber de conocerla para todos los españoles?",
      "options": [
        "Catalán",
        "Castellano",
        "Gallego",
        "Euskera"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué característica tiene la bandera amarilla de la bandera española según el Artículo 4.1?",
      "options": [
        "Es de igual anchura que las rojas",
        "Es de triple anchura que las rojas",
        "Es de doble anchura que las rojas",
        "Es de la mitad de anchura que las rojas"
      ],
      "answer": 2
    },
    {
      "question": "¿Qué ciudad se establece como capital del Estado en el Artículo 5?",
      "options": [
        "Barcelona",
        "Sevilla",
        "Madrid",
        "Valencia"
      ],
      "answer": 2
    },
    {
      "question": "¿Qué característica deben tener los partidos políticos según el Artículo 6 para ser instrumentos de participación política?",
      "options": [
        "Estructura jerárquica y centralizada",
        "Estructura interna y funcionamiento democráticos",
        "Financiación exclusivamente pública",
        "Afiliación obligatoria para los ciudadanos"
      ],
      "answer": 1
    },
    {
      "question": "¿Cuál es la misión principal de las Fuerzas Armadas según el Artículo 8.1?",
      "options": [
        "Mantener el orden público interno",
        "Garantizar la soberanía e independencia de España",
        "Supervisar las elecciones democráticas",
        "Proteger las instituciones autonómicas"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué principio garantiza el Artículo 9.3 respecto a las disposiciones sancionadoras?",
      "options": [
        "Retroactividad favorable",
        "Irretroactividad de disposiciones no favorables",
        "Aplicación inmediata sin excepción",
        "Exención de responsabilidad pública"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué tratados internacionales deben guiar la interpretación de los derechos fundamentales según el Artículo 10.2?",
      "options": [
        "Tratado de Maastricht y Carta de la ONU",
        "Declaración Universal de Derechos Humanos y tratados ratificados por España",
        "Pacto Internacional de Derechos Civiles y Políticos exclusivamente",
        "Convención Europea de Derechos Humanos únicamente"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué establece el Artículo 11.2 sobre la privación de la nacionalidad española?",
      "options": [
        "Puede aplicarse a todos los españoles por decisión judicial",
        "No puede aplicarse a españoles de origen",
        "Es posible para españoles naturalizados sin excepción",
        "Requiere aprobación del Congreso"
      ],
      "answer": 1
    },
    {
      "question": "¿Quiénes tienen derecho exclusivo al sufragio activo y pasivo según el Artículo 13.2, salvo excepciones por reciprocidad?",
      "options": [
        "Españoles y extranjeros residentes",
        "Solo los españoles",
        "Ciudadanos de la Unión Europea",
        "Extranjeros con tratados bilaterales"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué principio de igualdad establece el Artículo 14 para los españoles?",
      "options": [
        "Igualdad económica absoluta",
        "Igualdad ante la ley sin discriminación",
        "Igualdad de oportunidades laborales",
        "Igualdad de acceso a la educación"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué excepción permite la aplicación de la pena de muerte según el Artículo 15?",
      "options": [
        "En casos de terrorismo",
        "En tiempos de guerra por leyes penales militares",
        "Por delitos de traición",
        "Por decisión del Tribunal Constitucional"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué limitación establece el Artículo 16.1 para la libertad ideológica y religiosa?",
      "options": [
        "Prohibición de manifestaciones públicas",
        "Mantenimiento del orden público protegido por la ley",
        "Autorización previa de las autoridades",
        "Restricción a confesiones minoritarias"
      ],
      "answer": 1
    },
    {
      "question": "¿Cuál es el plazo máximo de detención preventiva según el Artículo 17.2?",
      "options": [
        "24 horas",
        "48 horas",
        "72 horas",
        "96 horas"
      ],
      "answer": 2
    },
    {
      "question": "¿Qué derecho garantiza el Artículo 18.2 respecto al domicilio?",
      "options": [
        "Inviolabilidad salvo consentimiento o resolución judicial",
        "Acceso libre para autoridades públicas",
        "Registro permitido por orden administrativa",
        "Protección solo para ciudadanos españoles"
      ],
      "answer": 0
    },
    {
      "question": "¿Qué derecho no puede ser limitado por motivos políticos o ideológicos según el Artículo 19?",
      "options": [
        "Derecho de reunión",
        "Derecho de asociación",
        "Derecho a entrar y salir de España",
        "Derecho a la educación"
      ],
      "answer": 2
    },
    {
      "question": "¿Qué prohíbe explícitamente el Artículo 20.2 en relación con la libertad de expresión?",
      "options": [
        "Publicaciones sin autorización",
        "Censura previa",
        "Críticas al Gobierno",
        "Uso de medios digitales"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué condición exige el Artículo 21.2 para prohibir una manifestación pública?",
      "options": [
        "Falta de autorización previa",
        "Riesgo de alteración del orden público con peligro para personas o bienes",
        "Ausencia de notificación al Gobierno",
        "Participación de menores de edad"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué tipo de asociaciones prohíbe el Artículo 22.5?",
      "options": [
        "Asociaciones culturales",
        "Asociaciones secretas y paramilitares",
        "Asociaciones religiosas",
        "Asociaciones profesionales"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué garantía procesal incluye el Artículo 24.2 para todos los ciudadanos?",
      "options": [
        "Derecho a un juicio privado",
        "Presunción de inocencia",
        "Obligación de declarar",
        "Juicio sin asistencia letrada"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué principio orienta las penas privativas de libertad según el Artículo 25.2?",
      "options": [
        "Castigo ejemplar",
        "Reeducación y reinserción social",
        "Aislamiento permanente",
        "Trabajos forzados"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué prohíbe el Artículo 26 en la Administración civil y organizaciones profesionales?",
      "options": [
        "Tribunales de Honor",
        "Sindicatos",
        "Asociaciones secretas",
        "Colegios Profesionales"
      ],
      "answer": 0
    },
    {
      "question": "¿Qué carácter tiene la enseñanza básica según el Artículo 27.4?",
      "options": [
        "Voluntaria y de pago",
        "Obligatoria y gratuita",
        "Optativa y subvencionada",
        "Privada y regulada"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué derecho reconoce el Artículo 28.2 a los trabajadores para defender sus intereses?",
      "options": [
        "Derecho de asociación",
        "Derecho a la huelga",
        "Derecho de petición",
        "Derecho a la negociación individual"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué limita el ejercicio del derecho de petición para los miembros de las Fuerzas Armadas según el Artículo 29.2?",
      "options": [
        "Solo puede ejercerse colectivamente",
        "Solo puede ejercerse individualmente",
        "Requiere autorización del Gobierno",
        "Está prohibido en su totalidad"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué regula el Artículo 30.2 en relación con el servicio militar?",
      "options": [
        "Es obligatorio para todos los ciudadanos",
        "Permite la objeción de conciencia con prestación sustitutoria",
        "Excluye a las mujeres",
        "No admite exenciones"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué principio rige el sistema tributario según el Artículo 31.1?",
      "options": [
        "Proporcionalidad absoluta",
        "Igualdad y progresividad",
        "Exención para rentas bajas",
        "Confiscatoriedad permitida"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué derecho reconoce el Artículo 32.1 en relación con el matrimonio?",
      "options": [
        "Igualdad jurídica entre hombre y mujer",
        "Obligatoriedad para todos los ciudadanos",
        "Exclusividad para españoles",
        "Prohibición de disolución"
      ],
      "answer": 0
    },
    {
      "question": "¿Qué delimita el contenido del derecho a la propiedad privada según el Artículo 33.2?",
      "options": [
        "Su valor económico",
        "Su función social",
        "Su titularidad pública",
        "Su inalienabilidad"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué derecho laboral prohíbe la discriminación por sexo según el Artículo 35.1?",
      "options": [
        "Derecho a la formación profesional",
        "Derecho a una remuneración suficiente",
        "Derecho a la sindicación",
        "Derecho a la huelga"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué reconoce el Artículo 37.1 como fuerza vinculante en la negociación colectiva?",
      "options": [
        "Los contratos individuales",
        "Los convenios colectivos",
        "Las decisiones empresariales",
        "Las resoluciones judiciales"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué protege el Artículo 38 en el marco de la economía de mercado?",
      "options": [
        "La planificación estatal centralizada",
        "La libertad de empresa",
        "La propiedad pública exclusiva",
        "La intervención administrativa ilimitada"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué protege el Artículo 39.1 en el ámbito social, económico y jurídico?",
      "options": [
        "La propiedad privada",
        "La familia",
        "La educación",
        "La salud"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué objetivo persigue la política económica según el Artículo 40.1?",
      "options": [
        "Crecimiento económico sin límites",
        "Distribución equitativa de la renta y pleno empleo",
        "Privatización de servicios públicos",
        "Reducción de la autonomía regional"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué garantiza el Artículo 41 para todos los ciudadanos en situaciones de necesidad?",
      "options": [
        "Un sistema público de Seguridad Social",
        "Subsidios privados obligatorios",
        "Asistencia sanitaria privada",
        "Pensiones exclusivamente contributivas"
      ],
      "answer": 0
    },
    {
      "question": "¿Qué derecho reconoce el Artículo 43.1 específicamente?",
      "options": [
        "Derecho a la educación",
        "Derecho a la protección de la salud",
        "Derecho al medio ambiente",
        "Derecho a la cultura"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué medidas deben tomar los poderes públicos según el Artículo 43.2 para tutelar la salud pública?",
      "options": [
        "Privatización de servicios médicos",
        "Medidas preventivas y prestación de servicios necesarios",
        "Restricción del acceso a la sanidad",
        "Eliminación de la educación sanitaria"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué fomenta el Artículo 43.3 en relación con la salud?",
      "options": [
        "Educación sanitaria, educación física y deporte",
        "Privatización del deporte profesional",
        "Limitación del ocio público",
        "Prohibición de actividades recreativas"
      ],
      "answer": 0
    },
    {
      "question": "¿Qué derecho reconoce el Artículo 45.1 relacionado con los principios rectores?",
      "options": [
        "Derecho a la educación gratuita",
        "Derecho a un medio ambiente adecuado",
        "Derecho a la propiedad intelectual",
        "Derecho a la sindicación"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué recurso puede interponerse ante el Tribunal Constitucional según el Artículo 53.2 para proteger derechos fundamentales?",
      "options": [
        "Recurso de casación",
        "Recurso de amparo",
        "Recurso de inconstitucionalidad",
        "Recurso contencioso-administrativo"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué institución regula el Artículo 54 para defender los derechos del Título I?",
      "options": [
        "Tribunal Constitucional",
        "Defensor del Pueblo",
        "Consejo General del Poder Judicial",
        "Tribunal de Cuentas"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué derechos pueden suspenderse en estado de excepción según el Artículo 55.1, salvo el Artículo 17.3?",
      "options": [
        "Derecho a la educación y salud",
        "Derechos de los Artículos 17, 18.2-3, 19, 20.1.a y d, 20.5, 21, 28.2, 37.2",
        "Derecho a la propiedad privada",
        "Derecho a la sindicación exclusivamente"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué derecho del Artículo 17.2 puede suspenderse individualmente en investigaciones de terrorismo según el Artículo 55.2?",
      "options": [
        "Derecho a la libertad de expresión",
        "Derecho a la detención preventiva máxima de 72 horas",
        "Derecho a la inviolabilidad del domicilio",
        "Derecho a la presunción de inocencia"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué principio rige la interpretación de los derechos fundamentales según el Artículo 10.1?",
      "options": [
        "Supremacía del derecho autonómico",
        "Dignidad de la persona y derechos inviolables",
        "Prioridad de la legislación estatal",
        "Subordinación a tratados internacionales"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué derecho reconoce el Artículo 27.3 para los padres respecto a la educación de sus hijos?",
      "options": [
        "Derecho a elegir centros privados exclusivamente",
        "Derecho a formación religiosa y moral acorde con sus convicciones",
        "Derecho a eximir a sus hijos de la enseñanza básica",
        "Derecho a vetar el currículo escolar"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué establece el Artículo 9.2 sobre la promoción de la libertad y la igualdad?",
      "options": [
        "Es opcional para los poderes públicos",
        "Es una obligación de los poderes públicos para hacerlas reales y efectivas",
        "Se limita a la igualdad económica",
        "Se aplica solo a los españoles"
      ],
      "answer": 1
    },
    {
      "question": "¿Qué derecho del Artículo 20.1.d protege la cláusula de conciencia y el secreto profesional?",
      "options": [
        "Derecho a la libre expresión",
        "Derecho a la producción artística",
        "Derecho a la libertad de cátedra",
        "Derecho a comunicar o recibir información veraz"
      ],
      "answer": 3
    },
    {
      "question": "¿Qué principio rige el Artículo 53.3 sobre los principios rectores del Capítulo Tercero?",
      "options": [
        "Son directamente exigibles ante los tribunales",
        "Solo informan la legislación y práctica judicial",
        "Tienen prioridad sobre los derechos fundamentales",
        "Son vinculantes para los ciudadanos"
      ],
      "answer": 1
    }
];

let current = 0;
let score = 0;
let answered = false;

function showQuestion() {
  const container = document.getElementById('quiz-container');
  if (current >= questions.length) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    container.innerHTML = `
      <h1>Test Constitución Española</h1>
      <div class="result">
        ¡Test finalizado!<br>
        Puntuación: <b>${score}</b> de <b>${questions.length}</b><br>
        Porcentaje de aciertos: <b>${percentage}%</b><br>
        <button class="btn" onclick="restartQuiz()">Reiniciar</button>
      </div>
    `;
    return;
  }
  const q = questions[current];
  let optionsHtml = q.options.map((opt, i) =>
    `<label class="option-label" for="option${i}">
      <input type="radio" id="option${i}" name="option" value="${i}">
      ${opt}
    </label>`
  ).join('');
  container.innerHTML = `
    <h1>Test Constitución Española</h1>
    <div class="progress">Pregunta ${current + 1} de ${questions.length}</div>
    <div class="question">${q.question}</div>
    <div id="optionsForm" class="options">${optionsHtml}</div>
    <div id="feedback" class="feedback"></div>
    <button class="btn" id="submit-btn">Responder</button>
  `;

  // Attach event listeners for visual selection
  const inputs = document.querySelectorAll('input[name="option"]');
  inputs.forEach(input => {
    input.addEventListener('change', function() {
      document.querySelectorAll('.option-label').forEach(label => label.classList.remove('selected'));
      const selectedLabel = this.closest('.option-label');
      if (selectedLabel) selectedLabel.classList.add('selected');
    });
  });

  // Ensure submit button is wired up
  document.getElementById('submit-btn').addEventListener('click', submitAnswer);
}

function submitAnswer() {
  if (answered) return;
  const options = document.getElementsByName('option');
  let selected = -1;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) selected = i;
  }
  if (selected === -1) {
    alert("Selecciona una respuesta antes de continuar.");
    return;
  }
  answered = true;
  const q = questions[current];
  const feedback = document.getElementById('feedback');
  if (selected === q.answer) {
    feedback.innerHTML = `<span class="correct">¡Correcto!</span>`;
    score++;
  } else {
    feedback.innerHTML = `<span class="incorrect">Incorrecto.</span>`;
  }
  feedback.innerHTML += `<br><span class="answer">${q.options[q.answer]}</span>`;
  // Disable options
  document.querySelectorAll('input[name="option"]').forEach(opt => opt.disabled = true);
  // Update button to "Next" or "View Results"
  const btn = document.getElementById('submit-btn');
  btn.textContent = (current < questions.length - 1) ? "Siguiente" : "Ver resultado";
  btn.removeEventListener('click', submitAnswer); // Remove old listener
  btn.addEventListener('click', () => {
    current++;
    answered = false; // Reset answered for the next question
    showQuestion();
  });
}

function restartQuiz() {
  current = 0;
  score = 0;
  answered = false;
  showQuestion();
}

window.onload = showQuestion;