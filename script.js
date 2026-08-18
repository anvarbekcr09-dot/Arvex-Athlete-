const days = [
  {name:"Dushanba",work:"💪 Yelka",class:"card"},
  {name:"Seshanba",work:"🪽 Qanot",class:"card"},
  {name:"Chorshanba",work:"🔥 Ko'krak",class:"card"},
  {name:"Payshanba",work:"🦵 Oyoq",class:"card blue"},
  {name:"Juma",work:"💪 Biceps + Triceps",class:"card"},
  {name:"Shanba",work:"🔴 Polniy Tana",class:"card red"},
  {name:"Yakshanba",work:"😴 Dam olish",class:"card"}
];

const today = new Date().getDay();
const index = today === 0 ? 6 : today - 1;

document.getElementById("today").innerText =
  "Bugun: " + days[index].name;

let html = "";
days.forEach(d=>{
  html += `<div class="${d.class}">
    <h3>${d.name}</h3>
    <p>${d.work}</p>
  </div>`;
});

document.getElementById("week").innerHTML = html;
const username = localStorage.getItem("name") || "Sportchi";
document.getElementById("welcome").innerText = "👋 Salom, " + username + "!";
const details = [
"Military Press 4×10\nLateral Raise 3×12\nFront Raise 3×12\nShrug 3×15",
"Pull Up 4×8\nLat Pulldown 3×12\nBarbell Row 4×10\nFace Pull 3×15",
"Bench Press 4×10\nIncline Press 3×12\nPush Up 3×15\nCable Fly 3×15",
"Squat 4×10\nLeg Press 3×12\nRomanian Deadlift 3×10\nCalf Raise 4×15",
"Biceps Curl 4×12\nHammer Curl 3×12\nTriceps Pushdown 4×12\nDips 3×10",
"Full Body Circuit • 45 daqiqa",
"Dam olish va cho'zilish • 15 daqiqa"
];

document.getElementById("todayCard").innerHTML = `
  <h3>🔥 Bugungi vazifa</h3>
  <p>${days[index].work}</p>
  <small>${details[index].replace(/\n/g,"<br>")}</small>
`;
