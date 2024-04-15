import './menu.css';

const containerMenu = document.createElement("div");
const divMenu = document.createElement("div");

const titleMenu = document.createElement("h1");

const divCard = document.createElement("div");
const text = document.createElement("p");

// EDITING ELEMENTS

containerMenu.classList.add("container-menu");

divMenu.classList.add("box-menu");

titleMenu.textContent = "Menu";
titleMenu.classList.add("title-menu");


// APPENDING ELEMENTS

containerMenu.appendChild(titleMenu);

containerMenu.appendChild(divMenu);


export default containerMenu;