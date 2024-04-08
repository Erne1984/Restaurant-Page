import "./about.css";

const aboutDiv = document.createElement("div");
const boxImg = document.createElement("img");
const boxText = document.createElement("div");

const titleAbout = document.createElement("h2");

aboutDiv.classList.add("about")

boxImg.classList.add("img-about")

titleAbout.textContent = "Sobre nós"

boxText.appendChild(titleAbout)

aboutDiv.appendChild(boxImg);
aboutDiv.appendChild(boxText);


export default aboutDiv;