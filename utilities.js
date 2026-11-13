window.onload = function() {
    ScrollReveal().reveal('.site', {delay:5000})
};

function clickOMatic() {
    alert('Ach man!');
};

const click = document.getElementById('click');

click.addEventListener("click", (event) => {
    clickOMatic();
});