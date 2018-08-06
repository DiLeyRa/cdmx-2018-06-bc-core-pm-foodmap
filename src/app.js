let time = 3000;
let load = document.getElementById('loader');
let content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', () =>{
    setTimeout(() => {//propiedad que ejecuta una funcion cuando resive un tiempo
        load.style.display = 'none';
        content.style.display = 'block';
    },time)
})
