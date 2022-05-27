// index



// game in game.js







// shop
function preisdiffer() {
    var medium = document.kategorienwahl.medium.selectedIndex; // Statt selectedIndex könnte man auch den Value nehmen
        // alert (medium);
    
        if (medium == 0) {
            document.getElementById("mediumtext").innerHTML = "DVD";
            document.getElementById("preistext").innerHTML = "CHF 13";
            document.getElementById("verfuegbar").innerHTML = "<span style='color:#b3ffc2'>An Lager</span><br>Auslieferung erfolgt in der Regel innert 2-3 Werktagen" ;
        }
    
        else if (medium == 1) {
            document.getElementById("mediumtext").innerHTML = "BluRay";
            document.getElementById("preistext").innerHTML = "CHF 15";
            document.getElementById("verfuegbar").innerHTML = "<span style='color:#fce8b1'>Knapp verfügbar</span><br>Auslieferung erfolgt in der Regel innert 3-4 Werktagen" ;
    
        }
    
        else if (medium == 2) {
            document.getElementById("mediumtext").innerHTML = "Videokassette";
            document.getElementById("preistext").innerHTML = "CHF 16";
            document.getElementById("verfuegbar").innerHTML = "<span style='color:#ff8091'>Nicht an Lager</span><br>Auslieferung erfolgt innert 3 Werktagen nachdem der Artikel verfügbar ist" ;
           // document.getElementById("verfuegbar").style.color = "#ff8091";
    
        }
    }