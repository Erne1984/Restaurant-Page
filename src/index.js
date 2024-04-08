import "./style.css";

import home from './components/home/home'
import menu from './components/menu/menu'
import about from './components/about/about'

const navTabs = document.querySelectorAll(".tab");
const mainDiv = document.querySelector("#content");

// Logic for changing tabs
navTabs.forEach((tab) => {
    const tabElements = {
        "Home": home,
        "Menu": menu,
        "About": about
    }
    let previousTab = "";
    tab.addEventListener("click", () => {
        navTabs.forEach((tab) => {
            if (tab.classList.contains("tab-actived")) {
                previousTab = tab.textContent;
                tab.classList.remove("tab-actived");
            }

        });

        mainDiv.replaceChild(tabElements[tab.textContent], tabElements[previousTab]);

        tab.classList.add("tab-actived");
    })
})



mainDiv.appendChild(home)