const isWindows = navigator.userAgentData
    ? navigator.userAgentData.platform === "Windows"
    : navigator.userAgent.includes("Windows");

function normalizeUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return "https://" + url;
    }
    return url;
}

if (!isWindows) {
    document.getElementById("quickapps").style.display = "none";
}

if (!localStorage.getItem("first_link")) {
    localStorage.setItem("first_link", "https://gmail.com");
}
if (!localStorage.getItem("first_name")) {
    localStorage.setItem("first_name", "Gmail");
}
if (!localStorage.getItem("second_link")) {
    localStorage.setItem("second_link", "https://stardance.hackclub.com");
}
if (!localStorage.getItem("second_name")) {
    localStorage.setItem("second_name", "Stardance");
}
if (!localStorage.getItem("third_link")) {
    localStorage.setItem("third_link", "https://google.com");
}
if (!localStorage.getItem("third_name")) {
    localStorage.setItem("third_name", "Google Search");
}

let first_name = localStorage.getItem("first_name");
let first_link = localStorage.getItem("first_link");
let second_name = localStorage.getItem("second_name");
let second_link = localStorage.getItem("second_link");
let third_name = localStorage.getItem("third_name");
let third_link = localStorage.getItem("third_link");

document.getElementById("first_button").value = first_name;
document.getElementById("second_button").value = second_name;
document.getElementById("third_button").value = third_name;

function first_click() {
    window.open(first_link, "_blank");
}

function first_edit() {
    let newName = prompt("Enter name:", first_name);
    let newLink = prompt("Enter link:", first_link);
    newLink = normalizeUrl(newLink);
    if (!newName || !newLink) return;

    localStorage.setItem("first_name", newName);
    localStorage.setItem("first_link", newLink);

    first_name = newName;
    first_link = newLink;


    document.getElementById("first_button").value = first_name;
}


function second_click() {
    window.open(second_link, "_blank");
}

function second_edit() {
    let newName = prompt("Enter name:", second_name);
    let newLink = prompt("Enter link:", second_link);
    newLink = normalizeUrl(newLink);
    if (!newName || !newLink) return;

    localStorage.setItem("second_name", newName);
    localStorage.setItem("second_link", newLink);

    second_name = newName;
    second_link = newLink;


    document.getElementById("second_button").value = second_name;
}


function third_click() {
    window.open(third_link, "_blank");
}

function third_edit() {
    let newName = prompt("Enter name:", third_name);
    let newLink = prompt("Enter link:", third_link);
    newLink = normalizeUrl(newLink);
    if (!newName || !newLink) return;

    localStorage.setItem("third_name", newName);
    localStorage.setItem("third_link", newLink);

    third_name = newName;
    third_link = newLink;


    document.getElementById("third_button").value = third_name;
}
