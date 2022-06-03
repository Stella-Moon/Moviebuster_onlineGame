// index

// Formulardaten in Datenbank


const databaseClient = {
  // Account Daten
  data: {
    url: "https://database-teacher-onlineshop.herokuapp.com/sql",
        group: "al8",
        pw: "31349893",
    sql: ""
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
  // Beispiel: databaseClient.insertInto("customers", ["firstname", "email"], [firstname.value, email.value])
  insertInto: async (tableName = "gameusers", fields =  ["vorname", "nachname, "email", "gewinnwahl"], values = [vorname.value, nachname.value, email.value, gewinnwahl.value]) => {
    const sql = `INSERT INTO ${tableName} (${fields.join(",")}) VALUES ("${values.join(",")}")`
    return await databaseClient.executeSqlQuery(sql)
  }

}


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
