import './menu.css';

const containerMenu = document.createElement("div");

const boxMenuDivMenu = document.createElement("div");
const divMenu = document.createElement("div");

const titleMenu = document.createElement("h1");

const divCard1 = document.createElement("div");
const divCard1Title = document.createElement("span");

const divCard2 = document.createElement("div");
const divCard2Title = document.createElement("span");

const divCard3 = document.createElement("div");
const divCard3Title = document.createElement("span");

const cardImg1 = document.createElement("div");
const cardImg2 = document.createElement("div");
const cardImg3 = document.createElement("div");

const text1 = document.createElement("p");
const text2 = document.createElement("p");
const text3 = document.createElement("p");

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

// EDITING ELEMENTS

containerMenu.classList.add("container-menu");

boxMenuDivMenu.classList.add("container-box-menu");

divMenu.classList.add("box-menu");

titleMenu.textContent = "Menu";
titleMenu.classList.add("title-menu");

divCard1.classList.add("card");
divCard1Title.textContent = "kasha";

divCard2.classList.add("card");
divCard2Title.textContent = "stroganoff";

divCard3.classList.add("card");
divCard3Title.textContent = "syrniki";

cardImg1.classList.add("food-one");
cardImg1.classList.add("food-img");

cardImg2.classList.add("food-two");
cardImg2.classList.add("food-img");

cardImg3.classList.add("food-three");
cardImg3.classList.add("food-img");

divCard1Title.classList.add("recipe-menu");
divCard2Title.classList.add("recipe-menu");
divCard3Title.classList.add("recipe-menu");

text1.textContent = "Otlichnaya yeda. Poprobuy eto!";
text1.classList.add("text-recipes");

text2.textContent = "Otlichnaya yeda. Poprobuy eto!";
text2.classList.add("text-recipes");

text3.textContent = "Otlichnaya yeda. Poprobuy eto!";
text3.classList.add("text-recipes");

btn1.textContent = "Zakaz";

btn2.textContent = "Zakaz";

btn3.textContent = "Zakaz";

// APPENDING ELEMENTS

divCard1.appendChild(cardImg1);
divCard1.appendChild(divCard1Title);
divCard1.appendChild(text1);
divCard1.appendChild(btn1);

divCard2.appendChild(cardImg2);
divCard2.appendChild(divCard2Title);
divCard2.appendChild(text2);
divCard2.appendChild(btn2);

divCard3.appendChild(cardImg3);
divCard3.appendChild(divCard3Title);
divCard3.appendChild(text3);
divCard3.appendChild(btn3);

divMenu.appendChild(divCard1);
divMenu.appendChild(divCard2);
divMenu.appendChild(divCard3);

boxMenuDivMenu.appendChild(divMenu);

containerMenu.appendChild(titleMenu);

containerMenu.appendChild(boxMenuDivMenu);


export default containerMenu;