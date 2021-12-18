const searchInput = document.getElementById("input");
const brooklynButton = document.getElementById("Brooklyn");
const bronxButton = document.getElementById("Bronx");
const manhattanButton = document.getElementById("Manhattan");
const queensButton = document.getElementById("Brooklyn");
const statenIslandButton = document.getElementById("Staten Island");

const brooklynUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN`
const manhattanUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`
const queensUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS`
const bronxUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`
const statenIslandUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN%20ISLAND`

function display(e){document.getElementById("resol").innerHTML = e}

 function loadIntoTable(url,table){
  const tableBody = table.querySelector("tbody")
  const response = fetch(url);
      response.then ((results) => 
                      {
                      results.json().then ((results2) =>
                      {
                      const {agency ,complaint_type, descriptor, resolution_description} = results2
                      tableBody.innerHTML+= "<ul>"
                      for (i=0; i <10; i++)
                      {
                        // console.log(results2[i])
                        tableBody.innerHTML+=`<li> ${results2[i].complaint_type} - ${results2[i].descriptor} <button id="resol" onclick = "display(results2.resolution_description)"> How was it resolved? </button> </li>`  
                      }
                      tableBody.innerHTML+="</ul>"
                      })
                      }
                    )
                    
}
brooklynButton.addEventListener('click', loadIntoTable(brooklynUrl , document.querySelector("table")))
bronxButton.addEventListener('click', loadIntoTable(bronxUrl , document.querySelector("table")))
manhattanButton.addEventListener('click', loadIntoTable(manhattanUrl , document.querySelector("table")))
queensButton.addEventListener('click', loadIntoTable(queensUrl , document.querySelector("table")))
statenIslandButton.addEventListener('click', loadIntoTable(statenIslandUrl , document.querySelector("table")))

        




