var array = [
    new Seminar("Unternehmensgründung", "Unternehmensgründung", "dortmund",new Date(2019,01-1,20,12,00), new Date(2019,01,20,14,00), 10, 22, "amk1"),
    new Seminar("Unternehmensgründung", "Unternehmensgründung", "dortmund", new Date(2019,02-1,20,12,00), new Date(2019,02,20,15,00), 5, 20,"bruh")

];

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
   };

   module.exports={
     seminare: array,
     Seminar: Seminar
   };