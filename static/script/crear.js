function crearUsuario(form)
{
    const nombreUsuario = form.nombreUsuario.value;
    const correo = form.correo.value;
    const contraseña1 = form.contraseña1.value;
    const contraseña_confi = form.contraseña_confi.value;


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "nombreUsuario":   nombreUsuario,
    "correo": correo,
    "contraseña1": contraseña1,
    "contraseña_repli": contraseña_confi
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://minticloud.uis.edu.co/c3s59grupo7/api/CrearUsuario", requestOptions)
    .then(response => response.json())
    .then(result => {
        alert(result.mensaje);
        window.location.href= "/login/index.html";
    })
    .catch(error => console.log('error', error));
}