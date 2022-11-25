alert("Buenas Tardes profesor Le habla Said Acosta el lider del equipo 7 del grupo O59 le dejo este mensaje para poder decirle que no se puede guardar las canciones en la base de datos ya que usted me dijo que me ayudaria con lo del base64 pero por lo que veo le surgieron problemas personales y no me pudo ayudar seria solo eso que no se puede subir las canciones a la base de datos y ya una cancion viene preconfigurada");

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
    //$('#generos').append('<option>Todas las canciones</option>');


    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("https://minticloud.uis.edu.co/c3s59grupo7/api/obtenerCanciones", requestOptions)
    .then(response => response.json())
    .then(result => {
            result.forEach(element => {
                $('#canciones>div').append(
                '<div class="container_canciones">'+
                    '<a href="" class="nombre_cancion">'+element.nombre+'</a>'+
                    '<a href="" class="nombre_cancion">Favoritos</a>'+
                    '<a href="" class="genero_cancion" download="">Descargar</a>'+
                '</div>'
                )
            });
        })
    .catch(error => console.log('error', error));




    function cambioGenero()
    {
        const idGenero = document.getElementById("generos").value;


        let url;
        if(idGenero==0)
            {
                 url = "https://minticloud.uis.edu.co/c3s59grupo7/api/obtenerCanciones";
            }else
            {
                 url = "https://minticloud.uis.edu.co/c3s59grupo7/api/obtenerGeneroId?id="+idGenero
            }
        
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            $('#canciones>div').empty()
            let array;
            if(idGenero==0)
            {
                 array = result;
            }else
            {
                 array = result.canciones;
            }
            array.forEach(element => {
                $('#canciones>div').append
                (
                    '<div class="container_canciones">'+
                    '<h3 href="" class="nombre_cancion">'+element.nombre+'</h3>'+
                    '<audio src="/audio/Welcome.mp3" controls></audio>'+
                    '<a href="" class="genero_cancion" download="/audio/Welcome.mp3">Descargar</a>'+
                '</div>'
                )
            });
        })
        .catch(error => console.log('error', error));
    }
