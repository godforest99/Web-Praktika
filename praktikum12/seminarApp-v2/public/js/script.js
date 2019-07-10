function getViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

function Seminar(titel, name, ort,startzeit, endzeit,
   freiePlaetze, gesamtePlaetze, tutoren) {
    this.titel=titel;
    this.name=name;
    this.ort=ort;
    this.startzeit=new Date(startzeit);
    this.endzeit=new Date(endzeit);
    this.freiePlaetze=freiePlaetze;
    this.gesamtePlaetze=gesamtePlaetze;
    this.tutoren=Array.of(tutoren);
    this.getBplaetze = function(){return this.gesamtePlaetze - this.freiePlaetze};
  }
  
var seminar1 = new Seminar("Unternehmensgründung", "Unternehmensgründung", "dortmund",new Date(2019,01-1,20,12,00), new Date(2019,01,20,14,00), 10, 22, "amk1")
var seminar2 = new Seminar("Unternehmensgründung", "Unternehmensgründung", "dortmund", new Date(2019,02-1,20,12,00), new Date(2019,02,20,15,00), 5, 20,"bruh")
let seminare = new Array(2);
seminare.push(seminar1, seminar2);
seminare.sort(function(x, y){ return x-y;})

console.log(`Die Viewport Breite beträgt ${getViewportWidth()} Pixel.`);
seminare.forEach(function (seminar){
  console.log(`${seminar.titel} ( ${seminar.startzeit.toLocaleDateString()} ${seminar.getBplaetze()} von ${seminar.gesamtePlaetze} belegt)`);
}
);
let createTd = function(content) {
  let td = document.createElement("td");
  td.textContent = content;
  return td;
}
let createTda = function(content) {
  let td = document.createElement("td");
  td.append(content);
  return td;
}
let tbody = document.querySelector("tbody");

/*seminare.forEach (seminar=>{
let tr = document.createElement("tr");
let a = document.createElement("a");
a.href = "DetailseiteSeminar.html";
a.textContent = seminar.name;

tr.append(createTda(a), createTd(seminar.startzeit.toLocaleDateString()), createTd(seminar.ort))
tbody.append(tr);
});*/





