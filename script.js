const saisie = document.getElementById("saisie");
const bouton = document.getElementById("bouton");
const texte = document.getElementById("texte");

saisie.focus();

bouton.addEventListener("click", function() {
    if (saisie.value.length === 0 || texte.value.length === 0) {
        alert("L'un des champs est vide");
    } else {
        const regexp = /^[0-9]+$/;
        const regexpTexte = /^[A-Z]+$/;

        if (regexp.test(saisie.value) && regexpTexte.test(texte.value)) {
            alert("Vous avez saisi : " + saisie.value + " et " + texte.value);
        } else {
            alert("Saisie incorrecte");
        }
    }
});
