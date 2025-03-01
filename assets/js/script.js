// index
// navigation 
function navigate() {
  location.href = "https://stella-moon.github.io/Moviebuster_onlineGame/"
}

// Formularvalidierung + Speichern in der Datenbank
async function validierung() {
  const vorname = document.getElementById("vorname");
  const nachname = document.getElementById("nachname");
  const email = document.getElementById("email");
  const gewinnwahl = document.userdata.gewinnwahl.value;
  const submitbutton = document.getElementById("submitbutton");



  if (vorname.value == "") {
    document.getElementById('infotext-vn').innerHTML = "Bitte Vornamen angeben!";
    document.getElementById('infotext-vn').classList.add("info-visible");
    document.getElementById('infotext-vn').style.display = "block";
    
  }


  else if (nachname.value == "") {
    document.getElementById('infotext-nn').innerHTML = "Bitte Nachnamen angeben!";
    document.getElementById('infotext-nn').classList.add("info-visible");
    document.getElementById('infotext-nn').style.display = "block";
 
  }

  else if (email.value == "") {
    document.getElementById('infotext-mail').innerHTML = "Bitte E-Mail Adresse angeben!";
    document.getElementById('infotext-mail').classList.add("info-visible");
    document.getElementById('infotext-mail').style.display = "block";
   
  }

  else if (gewinnwahl == "") {
    document.getElementById('infotext-win').innerHTML = "Bitte angeben welchen Preis Sie gerne hätten!";
    document.getElementById('infotext-win').classList.add("info-visible");
    document.getElementById('infotext-win').style.display = "block";
      }

  else {
    submitbutton.disabled = false
    const databaseClient = {
      // Account Daten
      data: {
        url: "https://database-teacher-onlineshop.herokuapp.com/sql",
        group: "al8",
        pw: "31349893",
        sql: "",
        charset: "utf8"
      },

      // HTTP Request an die Datenbank
      // Mitgegeben wird ein SQL Query als String 
      executeSqlQuery: async (sql) => {
        databaseClient.data.sql = sql
        const response = await fetch(databaseClient.data.url, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(databaseClient.data)
        })
        const result = await response.json()
        console.log("SQL Query executed: ", result, sql)

        return result
      },

      // Mitgegeben wird der Name der Tabelle als String, die Felder als Array und die Werte als Array.
      
      insertInto: async (tableName = "gameusers", fields = ["vorname", "nachname", "email", "gewinnwahl"], values = [vorname.value, nachname.value, email.value, gewinnwahl]) => {
        const sql = `INSERT INTO ${tableName} (${fields.join(",")}) VALUES ('${values.join("','")}')`
        return await databaseClient.executeSqlQuery(sql)

           }
    } // Ende Datenbank SQL

    const result = await databaseClient.insertInto("gameusers", ["vorname", "nachname", "email", "gewinnwahl"], [vorname.value, nachname.value, email.value, gewinnwahl])
    if (result.error) {
      if (console.error) { alert("Es kann nur einen Thor geben. Sie scheinen schon mal hier gewesen zu sein..."); }
    }
    else { location.href = "game.html" } //Seitenwechsel zu Gamepage

  } // Ende else -> Formular senden 

} // Ende validierungs funktion



// shop
function preisdiffer() {
  var medium = document.kategorienwahl.medium.selectedIndex; // Statt selectedIndex könnte man auch den Value nehmen

  if (medium == 0) {
    document.getElementById("mediumtext").innerHTML = "DVD";
    document.getElementById("preistext").innerHTML = "CHF 13";
    document.getElementById("verfuegbar").innerHTML = "<span style='color:#b3ffc2'>An Lager</span><br>Auslieferung erfolgt in der Regel innert 2-3 Werktagen";
  }

  else if (medium == 1) {
    document.getElementById("mediumtext").innerHTML = "BluRay";
    document.getElementById("preistext").innerHTML = "CHF 15";
    document.getElementById("verfuegbar").innerHTML = "<span style='color:#fce8b1'>Knapp verfügbar</span><br>Auslieferung erfolgt in der Regel innert 3-4 Werktagen";
  }

  else if (medium == 2) {
    document.getElementById("mediumtext").innerHTML = "Videokassette";
    document.getElementById("preistext").innerHTML = "CHF 16";
    document.getElementById("verfuegbar").innerHTML = "<span style='color:#ff8091'>Nicht an Lager</span><br>Auslieferung erfolgt innert 3 Werktagen nachdem der Artikel verfügbar ist";
  }
}
