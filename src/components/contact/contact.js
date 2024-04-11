import './contact.css';

const divContact = document.createElement("div");

const divMaps = document.createElement("div");
const titleContact = document.createElement("h2");
const divIconsContact = document.createElement("div");
const spanMap = document.createElement("small");
const spanPhone  = document.createElement("small");
const iconMap = document.createElement("i");
const iconPhone = document.createElement("i");
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
divContact.classList.add("contact");

// Map Side
divMaps.classList.add("div-map");

divIconsContact.classList.add("icons-contact")

titleReachtOut.textContent = "Contato Direto";
titleReachtOut.classList.add("title-contact");

spanMap.textContent = "Red Square, Moskva, Rússia, 109012";
spanMap.classList.add("info");

spanPhone.textContent = "+7 499 1917-1917";
spanPhone.classList.add("info");


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

export default divContact;
