const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
const url = req.url;
    if(url==='/'){
        fs.readFile('public/dashboard.html',function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
        });
    }else if(url.match('.html')){
        if(url==='/Seminare.html'){  
            res.writeHead(200, {'Content-Type': 'text/html'});
            data=generateSeminatePage();
            res.end(data);
        }else if(url==='/dashboard.html' || url==='/Dashboard.html'){
            fs.readFile('public/dashboard.html',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            });
        }else if(url==='/DetailseiteSeminar.html'){
            fs.readFile('public/DetailseiteSeminar.html',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            });
        }else if(url==='/DetailseiteSeminarleiter.html'){
            fs.readFile('public/DetailseiteSeminarleiter.html',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            });
        }else if(url==='/Seminarformular.html'){
            fs.readFile('public/Seminarformular.html',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            });
        }
    }else if(url.match('css')){
        if(url==='/style.css'){
            fs.readFile('public/css/style.css',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            });
        }else if(url==='/dashboard.css'|| url==='/Dashboard.css'){
            fs.readFile('public/css/dashboard.css',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            });
        }else if(url=='/flexbox.css'){
            fs.readFile('public/css/flexbox.css',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            });
        }else if(url==='/grid.css'){
            fs.readFile('public/css/grid.css',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            });
        }
    }else if(url.match('Ressources')){
        if(url==='/Ressources/byarne.png'){
            fs.readFile('public/img/byarne.png',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/img'});
            res.end(data);
            });
        }else if(url==='/Ressources/index.png'){
            fs.readFile('public/img/index.png',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/img'});
            res.end(data);
            });
        }else if(url==='/Ressources/ProfilBildSeminarleiter.jpg'){
            fs.readFile('public/img/ProfilBildSeminarleiter.jpg',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/img'});
            res.end(data);
            });
        }
    }else if(url.match('.js')){
        if(url==='/dashboard.js'){
            fs.readFile('public/js/dashboard.js',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(data);
            });
        }else if(url==='/script.js'){
            fs.readFile('public/js/script.js',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(data);
            });
        }else if(url==='/tictac.js'){
            fs.readFile('public/js/tictac.js',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(data);
            });
        }
    } else {
        fs.readFile('public/404.html',function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
        });
    }
    console.log(req.url);
        
   

    
});

server.listen(8020);

var seminarArray = [
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
   }

function seminarLiteral(titel, datum, ort){
    return `<tr>
    <td>${titel}</td>
    <td>${datum.getDate() + '.' + (datum.getMonth()+1) + '.' + datum.getFullYear()}</td>
    <td>${ort}</td>
    <tr>`;
}

function generateTableRows(){
    var tableRows='';
    seminarArray.forEach(function(element){
        tableRows += seminarLiteral(element.titel, element.startzeit, element.ort);
    });
    return tableRows;
}

function generateSeminatePage(){
    return `
    <!DOCTYPE html>
<html lang="de">

<head>
  <title>Seminare</title>

  <!--Grundaufbau HTML usw...-->
  <meta charset="utf-8">
  <link rel="stylesheet" type = "text/css" href ="style.css">
  <link rel="stylesheet" type="text/css" href="flexbox.css">
  <!-- <style media="screen">
    datalist {
      display: inline;
    }
  </style> -->

</head>

<body class="containerColumn">
  <header>
    <figure>
      <a href="Dashboard.html"><img src="Ressources/byarne.png" alt="Logo" width="100"></a>        <figcaption>Seminarverwaltung</figcaption>
    </figure>
  </header>
  <nav class="navigationsleiste">
    <ul>
      <li><a href="Seminare.html">Seminare</a></li>
      <li><a href="DetailseiteSeminar.html"> Detailseite Seminar </a></li>
      <li><a href="DetailseiteSeminarleiter.html">Seminarleiter</a> </li>
      <li><a href="Seminarformular.html">Neues Seminar anlegen</a></li>
    </ul>
  </nav>
  <div class="containerMainAndASide">
  <main class ="containerMain flex-Items">
    <h1>Seminare</h1>
    <form action="https://labs.inf.fh-dortmund.de/seminarApp/testSearch.php" method="GET">
      <label>Seminartitel:
        <input type="text" name="semtitle" size="20" maxlength="20" placeholder="Suche" list="vorschlaege" pattern="*[0-20]">
        <datalist id="vorschlaege">
          <option value="Unternehmensgruendu">
        </datalist>
      </label>
      <button type="submit">Finden</button>
    </form>
      <h2>Seminarliste</h2>
      <table id="seminarliste">
        <thead>
          <tr>
            <th>Titel</th>
            <th>Datum</th>
            <th>Ort</th>
          </tr>
        </thead>
        <tbody>
          ${generateTableRows()}
        </tbody>
      </table>

  </main>
  <aside class="zusatzinfos">
    <h2 title="Zusatzinfos">Zusatzinfos</h2>

    <ul>
      <li>Datum:... Meldung:...</li>

    </ul>
  </aside>
</div>
  <footer class="copyright"><span>&COPY; by Kevin Gottwald & Jannik Will</span></footer>
  <script type="text/javascript" src="script.js">
    
  </script>
</body>

</html>

    `;
}
var seminarTemplate=``;