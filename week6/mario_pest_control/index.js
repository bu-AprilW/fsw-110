const pests = document.baddies;
pests.addEventListener("submit", function(e) {
    e.preventDefault();

    let g = parseInt(pests.goombas.value);
    let b = parseInt(pests.bobombs.value);
    let c = parseInt(pests.cheepCheeps.value);
let total = (g * 5) + (b * 7) + (c * 11);

document.getElementById("total").textContent = total;

pests.goombas.value = 0;
pests.bobombs.value = 0;
pests.cheepCheeps.value = 0;
});