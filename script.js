window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
               response.json().then(function(json) {
                  let planet = Math.floor(Math.random()*json.length);
                  document.getElementById("missionTarget").innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[planet].name}</li>
                        <li>Diameter: ${json[planet].diameter}</li>
                        <li>Star: ${json[planet].star}</li>
                        <li>Distance from Earth: ${json[planet].distance}</li>
                        <li>Number of Moons: ${json[planet].moons}</li>
                     </ol>
                     <img src="${json[planet].image}">
                  `
               });
            });
   this.document.addEventListener("submit", function(event) {
      event.preventDefault();
      let name1 = document.querySelector("input[name=pilotName]").value;
      let name2 = document.querySelector("input[name=copilotName]").value;
      let level = document.querySelector("input[name=fuelLevel]").value;
      let mass = document.querySelector("input[name=cargoMass]").value;
      if(!name1 || !name2 || !level || !mass) {
         alert("Please fill out all required fields.");
      } else if(!isNaN(Number(name1)) || !isNaN(Number(name2))) {
         alert("Please provide a non-numerical entry for the name fields.");
      } else if(isNaN(Number(level)) || isNaN(Number(mass))) {
         alert("Please provide numerical values for the 'Fuel Level' and 'Cargo Mass' fields.");
      } else {
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.style.color = "green";
         pilotStatus.innerHTML = `Pilot ${name1} is ready for launch`;
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.style.color = "green";
         copilotStatus.innerHTML = `Co-pilot ${name2} is ready for launch`;
         let status = document.getElementById("launchStatus");
         if(Number(level)<10000) {
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
            let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.style.color = "red";
            fuelStatus.innerHTML = "Not enough fuel for launch";
         } else {
            fuelStatus.style.color = "green";
            fuelStatus.innerHTML = "Enough fuel for launch";
         }
         if(Number(mass)>10000) {
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
            let cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo too heavy for launch";
         } else {
            cargoStatus.style.color = "green";
            cargoStatus.innerHTML = "Cargo light enough for launch";
         }
         if(Number(level)>10000 && Number(mass)<10000) {
            status.innerHTML = "Shuttle is ready for launch";
            status.style.color = "green";
            // document.getElementById("faultyItems").style.visibility = "hidden";
            
         }
      }
   });
});
