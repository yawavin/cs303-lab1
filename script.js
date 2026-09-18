let booleanVar = false;

function scariness() {
    if (booleanVar === false) {

        document.getElementById("scary").style.display = "block";
        document.getElementById("cute").style.display = "none";

        booleanVar = true;

    }
    else {
        document.getElementById("scary").style.display = "none";
        document.getElementById("cute").style.display = "block";

        booleanVar = false;
    }
}