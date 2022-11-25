function iniciarSesion(form)
{
    const correo = form.correo.value;
    const contraseña = form.contraseña.value;



    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "correo": "correo",
      "contraseña": "contraseña"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://minticloud.uis.edu.co/c3s59grupo7/api/Login", requestOptions)
    .then(response => response.json())
    .then(result => {
        window.location.href = "/administrador/AgregarCanciones.html";
    })
    .catch(error => console.log('error', error));

}