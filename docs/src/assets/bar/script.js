function createNavbar(back) {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="logo">
            <a href="${back}">
                <img src="${back}src/img/icon.png" alt="Citrus Client Logo">
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="${back}over">Übersicht</a></li>
                <li><a href="${back}download">Download</a></li>
                <li><a href="${back}login">Login</a></li>
                <button id="themeToggle" class="theme-toggle" aria-label="Designmodus wechseln">
                    <img id="themeIcon" src="${back}src/img/icons/dark/auto.png" alt="Auto">
                </button>
            </ul>
        </nav>
    `;
    document.body.prepend(header);
    // Theme-Script laden
    if (!document.querySelector(`script[src="${back}src/js/theme.js"]`)) {
        const script = document.createElement("script");
        script.src = `${back}/src/js/theme.js`;
        document.body.appendChild(script);
    }
}