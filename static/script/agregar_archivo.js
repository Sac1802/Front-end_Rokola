import {blobToBase64} from './modules/blobManager.js';

const fileInput =  document.querySelector('#archivo'); 
const  bo64=  document.querySelector('#enviar_cancion2');


bo64.addEventListener('click', async(e) => {
    console.log('Convirtiendo mi blob');
    const myBlob = fileInput.files[0];
    const myB64 = await blobToBase64(myBlob);
    console.log(myB64);
})