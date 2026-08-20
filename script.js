const days = [
  {
    name: "Dushanba",
    work: "⚡🟢 YELKA",
    class: "green",
    exercises: [
      "▸ Shoulder Press — 4×10",
      "▸ Lateral Raise — 3×12",
      "▸ Front Raise — 3×12",
      "▸ Shrug — 3×15"
    ]
  },
  {
    name: "Seshanba",
    work: "🟢 QANOT",
    class: "green",
    exercises: [
      "▸ Pull Up — 4×8",
      "▸ Lat Pulldown — 3×12",
      "▸ Barbell Row — 4×10",
      "▸ Face Pull — 3×15"
    ]
  },
  {
    name: "Chorshanba",
    work: "🟢 KO‘KRAK",
    class: "green",
    exercises: [
      "▸ Bench Press — 4×10",
      "▸ Incline Press — 3×12",
      "▸ Push Up — 3×15",
      "▸ Cable Fly — 3×15"
    ]
  },
  {
    name: "Payshanba",
    work: "🔵 OYOQ",
    class: "blue",
    exercises: [
      "▸ Squat — 4×10",
      "▸ Leg Press — 3×12",
      "▸ Romanian Deadlift — 3×10",
      "▸ Calf Raise — 4×15"
    ]
  },
  {
    name: "Juma",
    work: "🟢 BICEPS + TRICEPS",
    class: "green",
    exercises: [
      "▸ Biceps Curl — 4×12",
      "▸ Hammer Curl — 3×12",
      "▸ Triceps Pushdown — 4×12",
      "▸ Dips — 3×10"
    ]
  },
  {
    name: "Shanba",
    work: "🔴 FULL BODY",
    class: "red",
    exercises: [
      "▸ Full Body Circuit",
      "▸ 45 daqiqa"
    ]
  },
  {
    name: "Yakshanba",
    work: "🟡🏠 RECOVERY",
    class: "yellow",
    exercises: [
      "▸ Dam olish",
      "▸ Cho‘zilish — 15 daqiqa"
    ]
  }
];

/* BUGUN */
const today = new Date().getDay();
const index = today === 0 ? 6 : today - 1;
const todayData = days[index];

const todayEl = document.getElementById("today");

if (todayEl) {
  todayEl.innerText = "BUGUN — " + todayData.name;
}

/* HAFTALIK JADVAL */
const weekEl = document.getElementById("week");

if (weekEl) {
  weekEl.innerHTML = days.map((day, i) => `
    <div class="day-card ${day.class} ${i === index ? "active-day" : ""}">
      <span class="day-label">${day.name}</span>
      <h3>${day.work}</h3>
      <div class="exercise-list">
        ${day.exercises.map(ex => `<div>${ex}</div>`).join("")}
      </div>
      ${i === index ? `<span class="today-badge">BUGUN</span>` : ""}
    </div>
  `).join("");
}

/* SALOMLASHISH */
const username =
  localStorage.getItem("name") || "Sportchi";

const welcomeEl =
  document.getElementById("welcome");

if (welcomeEl) {
  welcomeEl.innerText =
    "Salom, " + username + "!";
}

/* BUGUNGI KARTA */
const todayCard =
  document.getElementById("todayCard");

if (todayCard) {
  todayCard.innerHTML = `
    <h3>⚡ BUGUNGI MASHQ</h3>

    <p class="today-work">
      ${todayData.work}
    </p>

    <div class="today-exercises">
      ${todayData.exercises
        .map(ex => `<div>${ex}</div>`)
        .join("")}
    </div>
  `;
}

/* MASHG‘ULOT YAKUNLASH */
let xp = Number(localStorage.getItem("xp")) || 0;

function finishWorkout(){

  const today = new Date().toDateString();

  if(localStorage.getItem("todayDone") === today){
    return;
  }

  xp += 10;

  localStorage.setItem("xp", xp);
  localStorage.setItem("todayDone", today);

  updateXP();
}

function updateXP(){

  const xpEl = document.getElementById("xp");
  const xpFill = document.getElementById("xpFill");
  const levelEl = document.getElementById("level");

  if(xpEl) xpEl.innerText = xp;

  const level = Math.floor(xp / 100) + 1;

  if(levelEl) levelEl.innerText = level;

  const percent = xp % 100;

  if(xpFill) xpFill.style.width = percent + "%";
  const xpLeft = document.getElementById("xpLeft");
if (xpLeft) xpLeft.innerText = (100 - percent) + " XP";
}

updateXP();

const motivations = [
  "Boshlash — eng muhim qadam.",
  "Intizom kayfiyatdan kuchliroq.",
  "Bugungi mehnat ertangi natijani yaratadi.",
  "Qiyinchilik — rivojlanishning bir qismi.",
  "O‘zingga bergan va’dangni bajar.",
  "Chegarangni sinab ko‘r.",
  "Dam ol, tiklan va yana kuchli qayt."
];

const motivationEl =
  document.getElementById("motivation");

if (motivationEl) {
  const day =
    new Date().getDay();

  const index =
    day === 0 ? 6 : day - 1;

  motivationEl.innerText =
    motivations[index];
}
