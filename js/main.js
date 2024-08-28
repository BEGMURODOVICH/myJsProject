const modal = document.querySelector(".modal");
const menu = document.getElementById("menu-togle");
const themeSwitch = document.getElementById("dark-togle");
let darkmode = localStorage.getItem('darkmode');

function openMenu() {
    modal.style.display = "inline";
    menu.style.display = "none";
    themeSwitch.style.display = "none";


};

function closeMenu() {
    modal.style.display = "none";
    menu.style.display = "inline";
    themeSwitch.style.display = "inline";


}


const onDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const offdarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)

}

if (darkmode === "active") onDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? onDarkmode() : offdarkmode()

    // if (darkmode !== 'active') {
    //     onDarkmode()
    // } else {
    //     offdarkmode()
    // }
})