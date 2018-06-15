//Son cajas de respuestas para las peticiones
let dogeResponse;
/*let dogeResponse2;*/

function downloadShibe(){
    //Mostramos el mensaje de que está cargando
    const charge = document.getElementById("loading");
    charge.style = "display: block;";

    var xhttp = new XMLHttpRequest(); //Objeto que representa la petición (request)
    xhttp.onreadystatechange = function() { //Evento cuando el estado haya cambiado (cuando esté listo) Se ejecutará cuando esté lista, cuando reciba la respuesta
        if (this.readyState == 4 && this.status == 200) { //Todas las respuestas “200 y algo” serán respuestas satisfactorias
            //Escondemos el mensaje de cargando
            charge.style = "display: none;";
            dogeResponse = JSON.parse(this.responseText); //No usar funciones flechas cuando usamos this.  usar json punto stringify cuando tratemos con objetos 
            printDogos(); 
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true", true); //Con GET sólo se accede a datos, NO se envían (Cuando se hace Login, se debería hacer con POST, no con GET). Va el verbo (GET) y luego la petición (URL)
    xhttp.send(); //Aquí se ejecuta la petición

    /*
     * Podemos seguir ejecutando código acá mientras esperamos la respuesta
     */
    console.log("Holi soy doge");
}

function printDogos(){
    if(dogeResponse == undefined){ // (dogeResponse == undefined || dogeResponse2 == undefined)
        return;
    }

    const dogeReceptorDiv = document.getElementById("dogeReceptor");
    for(let dogeIndex=0; dogeIndex < dogeResponse.length; dogeIndex++){
        const dogeImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        dogeImg.src = dogeResponse[dogeIndex];
        dogeReceptorDiv.appendChild(dogeImg);
    }
}

function downloadCats(){
    const charge = document.getElementById("loadingCats");
    charge.style = "display: block;";
    const url = "https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true"
    fetch(url).then(  //Then recibe una función llamada cuando recibimos una respuesta. Entrega ''promesas''
        (response)=>{
            if(response.ok){
                return response.json();
            }
        }
    ).then( //Cuando la promesa se cumple.    Aquí anidamos más promesas
        (responseJson)=>{
            const catsReceptorDiv = document.getElementById("catsReceptor");
            for(let catIndex=0; catIndex < responseJson.length; catIndex++){
                const catImg = document.createElement('img'); //Aquí "almaceno" las imágenes
                catImg.src = responseJson[catIndex];
                catsReceptorDiv.appendChild(catImg);
            }
        }
    ).catch( //Cuando no se cumple
        (error)=>{
            console.log("Petición falló, no tenemos gatitos por hoy");
        }
    ); 

    /*Promise.all([   //Ejecuta todas las llamadas de manera paralela
        fetch(url1),
        fetch(url2),
        fetch(url3)
    ]).then(
        (responses)=>{   //Responde a todas las promesas
            return Promise.all(responses.map((response)=>{
                return response.json();
            }));
        }
    ).then((responseJsons)=>{ //Arreglo de respuestas en json
         //
         // Código que ocupa los jsons...
         //
    }).catch(
        (error)=>{ // Al menos una llamada falló

        }
    );*/
}