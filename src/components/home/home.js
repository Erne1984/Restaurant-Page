import './home.css';

const divHome = document.createElement("div");
const title = document.createElement("h1");
const content = document.createElement("p");

divHome.classList.add("home");

title.innerHTML = "Soviet Cuisine ☭";

content.textContent = `Explore as maravilhas gastronômicas da cozinha mais revolucionária de todas - Soviet Cuisine! 
    Pratos capazes de alegrar os paladares e estomâgos de trabalhadores do mundo todo!
    Trabalhadores do mundo, uni-vós!`;

content.classList.add('text')

divHome.appendChild(title);
divHome.appendChild(content)

export default divHome;