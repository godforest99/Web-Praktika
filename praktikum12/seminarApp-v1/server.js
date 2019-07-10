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
            fs.readFile('../Seminare.html',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            });
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
                res.writeHead(200, {'Content-Type': 'text/js'});
            res.end(data);
            });
        }else if(url==='/script.js'){
            fs.readFile('public/js/script.js',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/js'});
            res.end(data);
            });
        }else if(url==='/tictac.js'){
            fs.readFile('public/js/tictac.js',function(err, data){
                res.writeHead(200, {'Content-Type': 'text/js'});
            res.end(data);
            });
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("ERROR 404 Not Found");
    }
    console.log(req.url);
        
   

    
});

server.listen(8020);