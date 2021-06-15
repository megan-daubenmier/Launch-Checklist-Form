// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
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
         // let css = document.styleSheets[0];
         // let rules = css.cssRules;
         // let visibilityIndex = -1;
         // for(let i = 0; i < rules.length; i++) {
         //    if(rules[i]==="#faultyItems") {
         //       visibilityIndex = i;
         //       alert(visibilityIndex);
         //    }
         // }
         document.getElementById("pilotStatus").innerHTML = `${name1} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `${name2} is ready for launch`;
         let status = document.getElementById("launchStatus");
         if(Number(level)<10000) {
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch";
         }
         if(Number(mass)>10000) {
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo too heavy for launch";
         }
         if(Number(level)>10000 && Number(mass)<10000) {
            status.innerHTML = "Shuttle is ready for launch";
            status.style.color = "green";
            document.getElementById("fuelStatus").innerHTML = "Sufficient fuel for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo light enough for launch";
         }
      }
   });
});
