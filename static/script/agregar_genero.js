cargarGeneros();
function cargarGeneros()
{
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
    
        fetch("https://minticloud.uis.edu.co/c3s59grupo7/api/obtenerGenero", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach(element => {
                $('#generos').append('<option value='+element.id+'>'+element.nombre+'</option>');
            });
        })
        .catch(error => console.log('error', error));
}


function crearGenero(form)
{
        const nombreGenero = form.nombreGenero.value;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "nombre": nombreGenero
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://minticloud.uis.edu.co/c3s59grupo7/api/crearGenero", requestOptions)
        .then(response => response.json())
        .then(result => {
            $('#generos').empty();
            if(result)
            {
                cargarGeneros();    
            }
            alert("Genero Agregado con Exito!!");
        })
        .catch(error => console.log('error', error));
}

function crearCancion(form)
{
    const idGenero = form.generos.value;
    const nombreCancion = form.nombreCancion.value;
    const archivoCancion = form.archivoCancion.value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "nombre": nombreCancion
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://minticloud.uis.edu.co/c3s59grupo7/api/crearCancion?idGenero="+idGenero, requestOptions)
    .then(response => response.json())
    .then(result => {
        alert("Cancion Agregada con Exito!!")
    })
    .catch(error => console.log('error', error));

}
