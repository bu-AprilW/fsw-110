const formPrice = document.prices;
const total = document.getElementById("submitBtn");
const clearTotal = document.getElementById("clearBtn");

total.addEventListener("click", function(e) {
    e.preventDefault()

    const goombaTotal = Number(formPrice.goombas.value);
    const goombaPrice = Number(goombaTotal * 5);

    const bobombsTotal = Number(formPrice.bobombs.value);
    const bobombsPrice = Number(bobombsTotal * 7);

    const cheepcheepsTotal = Number(formPrice.cheepcheeps.value);
    const cheepcheepsPrice = Number(cheepcheepsTotal * 11);

    price = goombaPrice + bobombsPrice + cheepcheepsPrice;

    const finalTotal = document.createElement("p");
    finalTotal.textContent = "Total: " + price + " coins";
    finalTotal.style.fontSize = "50px";
    finalTotal.style.textAlign = "center";
    document.getElementById("form").append(finalTotal);

    clearTotal.addEventListener("click", function(e) {
        e.preventDefault();
        finalTotal.remove();
    })
});