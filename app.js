function downloadShibe(){
    var xhttp = new XMLHttpRequest(); //Objeto que representa la petición (request)
    xhttp.onreadystatechange = function() { //Evento cuando el estado haya cambiado (cuando esté listo) Se ejecutará cuando esté lista, cuando reciba la respuesta
        if (this.readyState == 4 && this.status == 200) { //Todas las respuestas “200 y algo” serán respuestas satisfactorias
            const dogeResponse = JSON.parse(this.responseText); //No usar funciones flechas cuando usamos this.  usar json punto stringify cuando tratemos con objetos 
            const dogeReceptorDiv = document.getElementById("dogeReceptor");
            for(let dogeIndex=0; dogeIndex < dogeResponse.length; dogeIndex++){
                const dogeImg = document.createElement('img'); //Aquí "almaceno" las imágenes
                dogeImg.src = dogeResponse[dogeIndex];
                dogeReceptorDiv.appendChild(dogeImg);
            }
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true", true); //Con GET sólo se accede a datos, NO se envían (Cuando se hace Login, se debería hacer con POST, no con GET). Va el verbo (GET) y luego la petición (URL)
    xhttp.send(); //Aquí se ejecuta la petición

    /*
     * Podemos seguir ejecutando código acá mientras esperamos la respuesta
     */
    console.log("Holi soy doge");
}