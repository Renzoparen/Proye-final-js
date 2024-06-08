const url = "../json/usados.json";

fetch(url)
 .then(res => res.json())
 .then(data => mostrarProductos(data))

function mostrarProductos(productos){
    productos.forEach( prod => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${prod.img}"/>
        <h1>${prod.marca}</h1>
        <button class="btn-info" id="${prod.id}">MAS INFORMACIÓN</button>
        `;

        document.getElementById('datos').appendChild(card);
    })

    const botoninfo = document.querySelectorAll('.btn-info');
    botoninfo.forEach(btn => {
        btn.addEventListener('click', (e)=> agregarADeseados(e, productos));
    })
}

function agregarADeseados(e, prods){
    const vehicElegido = prods.find( el => el.id === parseInt(e.target.id))
    console.log(vehicElegido);
    localStorage.setItem('datos', JSON.stringify(vehicElegido));
}
