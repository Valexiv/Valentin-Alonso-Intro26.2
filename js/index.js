const footer = document.createElement("footer");
document.body.appendChild(footer);
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");
copyright.innerHTML = `© Valentin Alonso ${thisYear}`;
footer.appendChild(copyright);
let skills = ["JavaScript", " Welding", " C++", "Bilingual"];
const skillsSection = document.querySelector("#Skills");
const skillsList = document.createElement("ul");
skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});
skillsSection.appendChild(skillsList);
