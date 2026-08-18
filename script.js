let xp = Number(localStorage.getItem("xp")) || 0;
let streak = Number(localStorage.getItem("streak")) || 0;
let lastDay = localStorage.getItem("lastDay") || "";

function updateUI() {
  document.getElementById("xp").textContent = xp;

  const fill = Math.min((xp % 100) / 100 * 100, 100);
  document.getElementById("xpFill").style.width = fill + "%";

  const today = new Date().toLocaleDateString("uz-UZ");
  document.getElementById("today").textContent = today;

  const cards = {
    bronze:100,
    silver:250,
    gold:500,
    elite:1000
  };

  Object.keys(cards).forEach(id=>{
    const el = document.querySelector("." + id);
    if(!el) return;
    el.style.opacity = xp >= cards[id] ? "1" : "0.35";
    el.style.filter = xp >= cards[id] ? "none" : "grayscale(100%)";
  });
}

function finishWorkout(){
  const today = new Date().toLocaleDateString("uz-UZ");

  if(lastDay === today){
    alert("Bugungi mashq allaqachon bajarilgan!");
    return;
  }

  xp += 25;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate()-1);

  if(lastDay === yesterday.toLocaleDateString("uz-UZ")){
    streak++;
  }else{
    streak = 1;
  }

  lastDay = today;

  localStorage.setItem("xp", xp);
  localStorage.setItem("streak", streak);
  localStorage.setItem("lastDay", lastDay);

  updateUI();
  alert("🔥 +25 XP qo'shildi!");
}

updateUI();
const workouts = [
  { day: "Dushanba", name: "Ko'krak + Triceps" },
  { day: "Seshanba", name: "Orqa + Biceps" },
  { day: "Chorshanba", name: "Kardio + Press" },
  { day: "Payshanba", name: "Yelka" },
  { day: "Juma", name: "Oyoq" },
  { day: "Shanba", name: "Full Body" },
  { day: "Yakshanba", name: "Dam olish" }
];

function renderWorkouts() {
  const week = document.getElementById("week");
  if (!week) return;

  week.innerHTML = workouts.map(w => `
    <div class="day-card">
      <h3>${w.day}</h3>
      <p>${w.name}</p>
    </div>
  `).join("");
}

renderWorkouts();
