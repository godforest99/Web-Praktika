let kachel = document.getElementById("kachel");
kachel.addEventListener("click", function(){
    let titel = prompt("Bitte geben Sie den Titel ein");
    let url = prompt("Fügen Sie die URL ein:");
    let a = document.createElement("a");
    a.href = url;
    let div = document.createElement("div");
    div.className = "flex-item";
    let p = document.createElement("p");
    p.textContent = titel;
    let main = document.querySelector("main");
    
    if(titel&&url!=null){
        main.append(a);
        a.append(div);
        div.append(p);
    }
    
    
})