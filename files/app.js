const topic = document.querySelector(".topic");
const container = document.querySelector(".container");
const main = document.querySelector(".main");
const search = document.querySelector(".search")
window.addEventListener("DOMContentLoaded", () => {
     alert("Search In order To Have Access To The University Database")
 })
search.addEventListener("submit",(e) => {
    e.preventDefault();
    const searcher = document.querySelector("#searcher").value;
    fetch(`http://universities.hipolabs.com/search?country=${searcher}`)
    .then(response => response.json())
    .then(data => uni(data))
    function uni(get) {
        get.forEach((unis) => {
            const {name,country,alpha_two_code} = unis
            const element = document.createElement("div");
            element.innerHTML = `
            <div class="specs">
            <div class="info">
            <h2 class="country">Country : ${country}</h2>
            <h2 class="alpha_code">Country Code : ${alpha_two_code}</h2>
            <h2 class="university">University : ${name}</h2>
            </div>
            `;
            main.appendChild(element)
        })
    }
    uni();

})