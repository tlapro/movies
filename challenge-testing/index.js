// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. 
// La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

class CarritoCompra {
    constructor() {
        this.cart = [];
    }
    agregarProducto(producto) {
        this.cart.push(producto);
    }
    calcularTotal() {
        // let total = 0;
        // for (const item of this.cart) {
        //     total += item.price * item.quantity;
        // }
        // return total;
        return this.cart.reduce((total, producto) => total + producto.price * producto.quantity, 0);
    }
    aplicarDescuento(porcentaje) {
        return this.calcularTotal() * (100 - porcentaje)/100;
    }
    infoCarrito() {
        return this.cart;
    }
}
console.log();

module.exports = CarritoCompra;