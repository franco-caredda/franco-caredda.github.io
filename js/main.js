const links = [...document.getElementsByClassName("page-selection-link")];

links.forEach(link => link.addEventListener("click", (e) => {
    const url = new URL(e.target.href);

    const sections = [...document.getElementById("content").children];
    sections.forEach(section => section.classList.add("hidden"));

    const sectionToShow = document.querySelector(url.hash);
    sectionToShow.classList.remove("hidden");
}));

window.onload = function(e) {
    fetch("https://raw.githubusercontent.com/franco-caredda/franco-caredda.github.io/refs/heads/main/README.md")
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(e => console.log("lorem ipsum"));
}