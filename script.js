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
  }

console.log(`Die Viewport Breite beträgt ${getViewportWidth()} Pixel.`);
