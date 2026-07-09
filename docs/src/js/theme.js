if (!sessionStorage.getItem("theme")) {
    sessionStorage.setItem("theme", "auto")
}

const button = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const themes = ["auto", "dark", "light"];
let current = sessionStorage.getItem("theme") || "auto";

function applyTheme(theme){
    if(theme === "auto"){
        document.body.classList.toggle(
            "dark",
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
    }else if(theme === "dark"){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }
    icon.src = `./src/img/icons/dark/${theme}.png`;
    icon.alt = theme;
    sessionStorage.setItem("theme", theme);
}

applyTheme(current);

button.onclick = () => {
    let index = themes.indexOf(current);
    current = themes[(index + 1) % themes.length];
    applyTheme(current);
};

window.matchMedia("(prefers-color-scheme: auto)")
.addEventListener("change", () => {
    if(current === "auto"){
        applyTheme("auto");
    }
});