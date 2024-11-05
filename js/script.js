fetch('/json/datos.json')
.then(response => response.json())
.then(data =>{
    let resultados = document.getElementById('resultados');
    data.forEach(usuario =>{
        resultados.innerHTML += `<p> Nombre: ${usuario.nombre}, Edad: ${usuario.edad},ciudad: ${usuario.ciudad}, `
    });
})

.catch(error => console.error ('error al cargar el archivo JSON', error));
