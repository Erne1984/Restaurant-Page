import "./about.css";

const aboutDiv = document.createElement("div");

const boxImg = document.createElement("div");
const boxText = document.createElement("div");

const titleAbout = document.createElement("h2");
const textAbout = document.createElement("div");

// EDITING ELEMENTS

aboutDiv.classList.add("about");

boxImg.classList.add("img-about");

titleAbout.textContent = "Sobre nós";

textAbout.textContent = "Quisque facilisis nisi eu nisi dictum consectetur. Morbi scelerisque vulputate malesuada. Quisque euismod congue sapien. Maecenas non congue odio. Curabitur cursus rutrum cursus. Cras varius ultrices lacus, quis feugiat lacus interdum nec. Nunc et erat id mauris tincidunt finibus. Quisque consequat lacus nisl.";
textAbout.classList.add("text-about")

// APPENDING ELEMENTS

boxText.appendChild(titleAbout);
boxText.appendChild(textAbout);

aboutDiv.appendChild(boxImg);
aboutDiv.appendChild(boxText);


export default aboutDiv;