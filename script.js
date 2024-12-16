function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (document.querySelector(selector)) {
        const isHidden = window.getComputedStyle(element).display === "none";
        element.style.display = isHidden ? "block" : "none";
    }
}

function updateH1WithUTMTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h1Element = document.querySelector("h1");
    if (h1Element && utmTerm) {
        h1Element.textContent = utmTerm;
    }
}


function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-GB", { hour12: false });
    console.log(timeString);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "green";
}



window.addEventListener("DOMContentLoaded", () => {
    showMessage("Скрипт загружен!");
    logCurrentTime();

    resetBackgroundColor();

    setTimeout(() => {
        changeBackgroundColor("lightblue");
    }, 1000); 

    setTimeout(() => {
        toggleVisibility(".content");
    }, 2000);

    updateH1WithUTMTerm();
});

window.addEventListener('load', function() {
    const performanceData = window.performance.getEntriesByType("navigation")[0];
    const pageLoadTime = performanceData.loadEventEnd - performanceData.startTime;
    console.log(pageLoadTime);
});
