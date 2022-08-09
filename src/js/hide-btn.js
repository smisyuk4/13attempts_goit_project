(() => {
let headerDiscrBtn = document.querySelector(".headerDiscrBtn");
let headerDiscr = document.querySelector(".headerDiscr");
// Event 
headerDiscrBtn.addEventListener('click', () => {
    headerDiscrBtn.classList.toggle("is-open");
    headerDiscr.classList.toggle("is-open");
})
})();