import "./about.css";

const containerAbout = document.createElement("div");
const aboutDiv = document.createElement("div");

const titleTab = document.createElement("h1");

const boxImg = document.createElement("div");
const boxText = document.createElement("div");

const titleAbout = document.createElement("h2");
const textAbout = document.createElement("div");
const btnContact = document.createElement("button");

// EDITING ELEMENTS

containerAbout.classList.add("container-about");

titleTab.textContent = "Davayte uznayem drug druga";
titleTab.classList.add("title-tab-about")

aboutDiv.classList.add("about");

boxImg.classList.add("img-about");

boxText.classList.add("box-text");

titleAbout.textContent = "Sobre nós";
titleAbout.classList.add("about-title");

textAbout.textContent = "Quisque facilisis nisi eu nisi dictum consectetur. Morbi scelerisque vulputate malesuada. Quisque euismod congue sapien. Maecenas non congue odio. Curabitur cursus rutrum cursus. Cras varius ultrices lacus, quis feugiat lacus interdum nec. Nunc et erat id mauris tincidunt finibus. Quisque consequat lacus nisl.";
textAbout.classList.add("text-about")

btnContact.textContent = "Saiba Mais";
btnContact.classList.add("btn-about");

// APPENDING ELEMENTS

boxText.appendChild(titleAbout);
boxText.appendChild(textAbout);
boxText.appendChild(btnContact);

aboutDiv.appendChild(boxImg);
aboutDiv.appendChild(boxText);

containerAbout.appendChild(titleTab);
containerAbout.appendChild(aboutDiv);


export default containerAbout;