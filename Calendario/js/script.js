// Obtiene la fecha actual
const date = new Date();

// Define opciones para formatear la fecha en español
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaEnEspanol = date.toLocaleDateString('es-ES', opcionesFecha);

// Función para renderizar el calendario
const renderCalendar = () => {
  date.setDate(1);

  // Obtén la referencia a los días del mes en el HTML
  const monthDays = document.querySelector(".days");

  // Obtiene el último día del mes anterior y del mes actual
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  // Obtiene el índice del primer día del mes actual y el último día del mes actual
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  // Calcula el número de días del mes siguiente que se mostrarán
  const nextDays = 7 - lastDayIndex - 1;

  // Nombres de los meses en español
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Actualiza el nombre del mes y la fecha en el HTML
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = fechaEnEspanol;

  let days = "";

  // Genera los días del mes anterior
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  // Genera los días del mes actual, destacando el día actual
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  // Genera los días del mes siguiente
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  // Actualiza los días en el HTML
  monthDays.innerHTML = days;
};

// Agrega eventos a los botones de mes anterior y mes siguiente
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// Renderiza el calendario al cargar la página
renderCalendar();
