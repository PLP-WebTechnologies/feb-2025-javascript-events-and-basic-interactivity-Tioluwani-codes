// Event Handling
document.getElementById("click-btn").addEventListener("click", () => {
    alert("Button clicked!");
});

document.getElementById("hover-btn").addEventListener("mouseover", () => {
    document.getElementById("hover-btn").style.background = "yellow";
});

document.getElementById("hover-btn").addEventListener("mouseout", () => {
    document.getElementById("hover-btn").style.background = "";
});

document.getElementById("keypress-input").addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
});

let doubleClickCount = 0;
document.getElementById("double-click-btn").addEventListener("click", () => {
    doubleClickCount++;
    if (doubleClickCount === 2) {
        alert("Double-click detected!");
        doubleClickCount = 0;
    }
});

// Interactive Elements
document.getElementById("toggle-btn").addEventListener("click", () => {
    document.getElementById("toggle-btn").textContent = document.getElementById("toggle-btn").textContent === "Toggle Text" ? "Toggled!" : "Toggle Text";
});

const tabBtns = document.getElementsByClassName("tab-btn");
const tabContents = document.getElementsByClassName("tab-content");
for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", () => {
        for (let j = 0; j < tabBtns.length; j++) {
            tabBtns[j].classList.remove("active");
            tabContents[j].classList.remove("active