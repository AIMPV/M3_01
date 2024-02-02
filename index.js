precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function botonAgregar() {
    let cantidad = document.querySelector(".cantidad");
    let aumentar = Number(cantidad.innerHTML);
    aumentar = aumentar + 1;
    cantidad.innerHTML = aumentar;

    total = document.querySelector('.valor-total');
    total.innerHTML = aumentar * precio;
}

function botonRemover() {
    if(total.innerHTML == '0') {
        return
    }
    else {
        let cantidad = document.querySelector(".cantidad");
        let disminuir = Number(cantidad.innerHTML);
        disminuir = disminuir - 1;
        cantidad.innerHTML = disminuir;

        total = document.querySelector('.valor-total');
        total.innerHTML = disminuir * precio;
    }
    

}   