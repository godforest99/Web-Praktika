function getViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

function Seminar(titel, name, ort,startZeit, startDatum, endZeit, endDatum,
   freiePlaetze, gesamtePlaetze, tutoren) {
    this.titel=titel;
    this.name=name;
    this.ort=ort;
    this.startzeit=new Date(startDatum, startZeit);
    this.endzeit=new Date(endDatum, endZeit);
    this.freiePlaetze=freiePlaetze;
    this.gesamtePlaetze=gesamtePlaetze;
    this.tutoren=Array.of(tutoren);
    this.getBplaetze = function(){return this.gesamtePlaetze - this.freiePlaetze};
  }
  
var seminar1 = new Seminar("Test", "aha", "dortmund", 15, 05-05-2019, 18, 05-05-2019, 10, 22, "amk1")
var seminar2 = new Seminar("Test2", "ahja", "dortmund", 13, 06-06-2019, 15, 05-05-2019, 5, 20,"bruh")
let seminare = new Array(2);
seminare.push(seminar1, seminar2);
seminare.sort(function(x, y){ return x-y;})

console.log(`Die Viewport Breite beträgt ${getViewportWidth()} Pixel.`);
for(let i=0; i < seminare.length; i++){
  console.log(`${seminare[i].titel} ( ${seminare[i].startzeit.toLocaleDateString()} ${seminare[i].getBplaetze()} von ${seminare[i].gesamtePlaetze} belegt)`);
}
