let carrito = [];

const contenedorvehic = document.getElementById('misvehiculos');


function renderizarVehiculos(listaVehic){
    for(const vehic of listaVehic){
        contenedorvehic.innerHTML += `
        <div class="nuevos">
      <div class="card">
        <img src=${vehic.foto} alt=${vehic.nombre}>
        <div class="card-body">
          <h3>${vehic.nombre}</h3>
          <h3>${vehic.modelo}</h3>
          <p>${vehic.descripcion}</p>
        </div>
        <div class="card-footer">
          <small class="stock">Estado: ${vehic.stock}</small>
         <button class="bot"><a href="./contacto.html">SABER MAS</a></button>
         <button class="btn btn-primary selec" id=${vehic.id}>Seleccionar</button>
        </div>
      </div>
    `
    }
    
    const botonesSelec = document.getElementsByClassName('selec');
        for(const boton of botonesSelec){
            //opcion 1 - addEventListener()
          boton.addEventListener('click', ()=>{
            //buscar el objeto que tiene ese id
            const vehicACarrito = listaVehic.find(vehic => vehic.id == boton.id);
            console.log(vehicACarrito);
            //cargar el producto al carrito de compras
            agregarACarrito(vehicACarrito);
      })
  }
}

renderizarVehiculos(vehiculos);

function agregarACarrito(vehiculo){
  carrito.push(vehiculo);
  console.table(carrito);
}

