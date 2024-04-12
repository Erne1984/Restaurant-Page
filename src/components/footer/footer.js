// JavaScript
// -*- coding: utf-8 -*-

import './footer.css';

const footerDiv = document.createElement("div");

const colOne = document.createElement("div");
const logoColOne = document.createElement("div");
const textColOne = document.createElement("div");
const copyrightColOne = document.createElement("div");

const colTwo = document.createElement("div");
const titleColTwo = document.createElement("h3");
const rowIcons = document.createElement("div");
const iconFace = document.createElement("div");
const iconGithub = document.createElement("div");
const iconInsta = document.createElement("div");
const iconTwitter = document.createElement("div");


// EDITING ELEMENTS

footerDiv.classList.add("footer-container");

logoColOne.classList.add("logo-footer");

textColOne.textContent = "Paz, Pão e Terra";
textColOne.classList.add("slogan");

copyrightColOne.innerHTML =  `© ${new Date().getFullYear()} Soviet Cuisine`;
copyrightColOne.classList.add("copyright-col");

colTwo.classList.add("follow-col");

titleColTwo.textContent = "Nós siga!";

rowIcons.classList.add("row-icons");

iconFace.classList.add("icon-face");
iconFace.classList.add("icons-row");

iconInsta.classList.add("icon-insta");
iconInsta.classList.add("icons-row");

iconTwitter.classList.add("icon-twitter");
iconTwitter.classList.add("icons-row");

iconGithub.classList.add("icon-github");
iconGithub.classList.add("icons-row");

// APPENDING ELEMENTS

colOne.appendChild(logoColOne);
colOne.appendChild(textColOne);
colOne.appendChild(copyrightColOne);

colTwo.appendChild(titleColTwo);
rowIcons.appendChild(iconFace);
rowIcons.appendChild(iconInsta);
rowIcons.appendChild(iconTwitter);
rowIcons.appendChild(iconGithub);
colTwo.appendChild(rowIcons);

footerDiv.appendChild(colOne)
footerDiv.appendChild(colTwo);

export default footerDiv;