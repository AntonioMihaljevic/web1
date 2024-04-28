var tekstZamijenjen = false;

function zamijeniTekst() {
    var elementDemo = document.getElementById("demo");

    if (!tekstZamijenjen) {
        elementDemo.innerHTML = "Antonio Mihaljević";
        tekstZamijenjen = true;
    }
    else {
        elementDemo.innerHTML = "JavaScript može činiti promjene u kodu.";
        tekstZamijenjen = false;
    }
}
