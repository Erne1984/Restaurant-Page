import './home.css';

const containerHome = document.createElement("div");
const divHome = document.createElement("div");
const title = document.createElement("h1");
const content = document.createElement("p");
const btnBox = document.createElement("div");
const button = document.createElement("button");

// Editing Elemets

containerHome.classList.add("container-home");

divHome.classList.add("home");

title.innerHTML = "Soviet Cuisine ☭";

content.textContent = `Explore as maravilhas gastronômicas da cozinha mais revolucionária de todas - Soviet Cuisine! 
    Pratos capazes de alegrar os paladares e estomâgos de trabalhadores do mundo todo!
    Trabalhadores do mundo, uni-vós!`;

content.classList.add('text');

btnBox.classList.add("btn-box")
btnBox.appendChild(button)

button.classList.add("btn-menu");
button.textContent = "Menu"

// Appending Elemets

containerHome.appendChild(divHome);
divHome.appendChild(title);
divHome.appendChild(content);
divHome.appendChild(btnBox);

export default containerHome;