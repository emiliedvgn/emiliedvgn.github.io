window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
       
        let file = fileInput.files[0];
       
        let textType = new RegExp("text.*");

        if (file.type.match(textType)) { 
            
            var reader = new FileReader();

            
            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
            }

            
            reader.readAsText(file);    

            document.getElementById("logger").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
        } else { 
            fileDisplayArea.innerText = "";
            document.getElementById("logger").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
}


function afficheCacheAide() {
    let aide = document.getElementById("aide");
    let boutonAide = document.getElementById("boutonAide");
    let display = aide.style.display;
    
    if (display === "none") {
        aide.style.display = "block";
        boutonAide.innerText = "Cacher l'aide";
    } else {
        aide.style.display = "none";
        boutonAide.innerText = "Afficher l'aide";
    }
}


function segmentation() {
    let text = document.getElementById("fileDisplayArea").innerText;
    let delim = document.getElementById("delimID").value;
    let display = document.getElementById("page-analysis");

    let regex_delim = new RegExp(
        "["
        + delim
            .replace("-", "\\-") 
            .replace("[", "\\[").replace("]", "\\]") 
        + "\\s" 
        + "]+" 
    );

    let tokens = text.split(regex_delim);
    tokens = tokens.filter(x => x.trim() != ''); 

    
    display.innerHTML = tokens.join(" ");
}
