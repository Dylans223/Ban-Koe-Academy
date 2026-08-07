// ===================================
// Progress Page
// ===================================

let xp =
Number(localStorage.getItem("xp")) || 0;

let correct =
Number(localStorage.getItem("correct")) || 0;

let incorrect =
Number(localStorage.getItem("incorrect")) || 0;

const total =
correct + incorrect;

const accuracy =
total === 0
? 0
: Math.round((correct / total) * 100);

const level =
Math.floor(xp / 100) + 1;

let rank = "Apprentice";

if(level>=5) rank="Technician";

if(level>=10) rank="Estimator";

if(level>=20) rank="Sales Support";

if(level>=30) rank="Project Manager";

if(level>=50) rank="Ban-Koe Master";

document.getElementById("xpCounter").innerText =
xp;

document.getElementById("levelCounter").innerText =
level;

document.getElementById("rankCounter").innerText =
rank;

document.getElementById("accuracyCounter").innerText =
accuracy + "%";

document.getElementById("correctCounter").innerText =
correct;

document.getElementById("incorrectCounter").innerText =
incorrect;

document.getElementById("questionsCounter").innerText =
total;

