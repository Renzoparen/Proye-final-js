

const vehiculos = [{
    id: 1,
    foto: "https://s3.amazonaws.com/static.multiaviso.com/vehicle/images/44-CRAHKAS5RUKZ-chevrolet-onix.jpg",
    nombre: "CHEVROLET ONIX",
    modelo: "1 T 2 PLUS 2024",
    descripcion:"El auto que se integra a tu vida y cambia la categoría para darte más de lo que esperás.",
    stock: "Disponible",
    precio: "25.000",
},
{
    id:2,
    foto: "https://cdn.jdpower.com/JDP_2024%20Ram%201500%20Rebel%20Red%20Front%20Quarter%20View.jpg",
    nombre: "DODGE 1500",
    modelo: "REBEL HEMI 2024",
    descripcion:"La 1500 Ram 2024 está equipada para ofrecer un rendimiento excepcional.",
    stock: "Disponbile",
    precio:"84.900",
},
{
    id:3,
    foto: "https://autotest.com.ar/wp-content/uploads/2021/08/Peugeot-208-trompa.jpg",
    nombre: "PEUGEOT 208",
    modelo: "ACTIVE 2024",
    descripcion:"El más pequeño de los Peugeot adecúa su diseño al de los modelos más nuevos de la gama.",
    stock: "NO DISPONIBLE", 
    precio: "22.990",
},
{
    id:4,
    foto: "https://images.topgear.com.ph/topgear/images/2022/05/17/2022-toyota-raize-turbo-review-1-1652747295.jpg",
    nombre: "TOYOTA RAIZE",
    modelo: "GLX 1.0 2024",
    descripcion:"Diseñada para tu estilo de vida.",
    stock: "Disponbile",
    precio:"32.500",
},
{
    id:5,
    foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis9ecMt3cRiNlnARY1slaUkUqYCD1HzKbI9j-bzy2P98CaC9M1l-eZGbzLXn3ayXl4N3yWniUlUzXYOL_sNjhh9oODRDcB4zssTXSn9zOkvc9IeoTrXsiIiZ7ymvoAzsVzMse6gYssPAfCbm075LyEc0XUCvDuqZVdzb58ReNQ2aYIfHimiITkP3Jiqwk/w1200-h630-p-k-no-nu/Prueba:%20Jetour%20Dashing%20Travel%201.6T%20350T%20GDI%20DCT103.jpg",
    nombre: "Jetour Dashing",
    modelo: "5 plazas",
    descripcion:"Dashing brinda toda la seguridad para viajar tranquilo.",
    stock: "Disponbile",
    precio:"30.300",
}



]

const listvehi = vehiculos.filter(vehiculo => vehiculo.precio < 30.000);
console.log(listvehi);