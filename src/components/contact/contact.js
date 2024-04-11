import './contact.css';

const divContainer = document.createElement("div");
const divContact = document.createElement("div");

const divMaps = document.createElement("div");
const titleContact = document.createElement("h2");
const divIconsContact = document.createElement("div");
const spanMap = document.createElement("small");
const spanPhone  = document.createElement("small");
const iconMap = document.createElement("span");
const iconPhone = document.createElement("span");
const titleReachtOut = document.createElement("h2");

const form = document.createElement("form");
const local = document.querySelector("iframe")
const labelEmail = document.createElement("label");
const inputEmail = document.createElement("input");
const labelName = document.createElement("label");
const inputName = document.createElement("input");
const labelMsg = document.createElement("label");
const inputMsg = document.createElement("textarea");
const inputButton = document.createElement("input");

// Editing Elements
divContainer.classList.add("container-contact");

divContact.classList.add("contact");

// Map Side
divMaps.classList.add("div-map");

divIconsContact.classList.add("icons-contact")

titleReachtOut.textContent = "Contato Direto";
titleReachtOut.classList.add("title-contact");

iconMap.classList.add("icon-map");

spanMap.classList.add("info");

spanMap.textContent = "Red Square, Moskva, Rússia, 109012";
spanMap.appendChild(iconMap);

iconPhone.classList.add("icon-phone");

spanPhone.classList.add("info");
spanPhone.textContent = "+7 499 1917-1917";
spanPhone.appendChild(iconPhone)

local.classList.add("map");


// Form Side
titleContact.textContent = "Entre em Contato!";
titleContact.classList.add("title-contact");

labelEmail.textContent = "EMAIL";
labelEmail.classList.add("label-title");

inputEmail.type = "email";
inputEmail.placeholder = "email";
inputEmail.classList.add("input-contact");

labelName.textContent = "NAME";
labelName.classList.add("label-title");

inputName.type = "text";
inputName.placeholder = "name";
inputName.classList.add("input-contact");

labelMsg.textContent = "MESSAGE";
labelMsg.classList.add("label-title");

inputMsg.placeholder = "Gostaria de entrar em contato...";
inputMsg.rows = "5";
inputMsg.classList.add("input-textarea");

inputButton.type = "button";
inputButton.value = "Enviar";

// Appending Elements
divMaps.appendChild(titleReachtOut);
divMaps.appendChild(divIconsContact);
divIconsContact.appendChild(spanMap);
divIconsContact.appendChild(spanPhone);
divMaps.appendChild(local);

form.appendChild(titleContact);
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(labelName);
form.appendChild(inputName);
form.appendChild(labelMsg);
form.appendChild(inputMsg);
form.appendChild(inputButton);
divContact.appendChild(form);
divContact.appendChild(divMaps);
divContainer.appendChild(divContact);

export default divContainer;
