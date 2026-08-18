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
