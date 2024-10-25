const CarritoCompra = require("../index");

// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. 
// La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios
const productoA = {name: "Producto A", price: 20, quantity: 3};
const productoB = {name: "Producto B", price: 35, quantity: 1};
const productoC = {name: "Producto C", price: 5, quantity: 7};

describe("El carrito de compras debe", () => {
    it("Inicializar un carrito vacio", () => {
        expect(new CarritoCompra().carrito).toEqual([]);
    });
    it("Agregar un producto", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto(productoA)
        expect(carrito.infoCarrito()).toEqual([{name: "Producto A", price: 20, quantity: 3}]);
    });
    it("Calcular el total", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto(productoB);
        carrito.agregarProducto(productoC);
        expect(carrito.calcularTotal()).toEqual(70);
        expect(carrito.aplicarDescuento(20)).toEqual(56)
    });  
    
});

let carrito;

beforeEach(() => {
    carrito = new CarritoCompra();  // Crea una nueva instancia antes de cada test
});
    describe("El carrito de compras debe", () => {
        it("Contener el producto agregado", () => {
            carrito.agregarProducto(productoA);
            expect(carrito.infoCarrito()).toContainEqual({name: "Producto A", price: 20, quantity: 3});
        });
        it("Tener el número correcto de productos", () => {
            carrito.agregarProducto(productoA);
            carrito.agregarProducto(productoB);
            expect(carrito.infoCarrito()).toHaveLength(2);
        });
        it("Debe aplicar el descuento correctamente", () => {
            carrito.agregarProducto({ name: "Producto D", price: 33.33, quantity: 1 });
            expect(carrito.aplicarDescuento(10)).toBeCloseTo(30);
        });
        it("Debe contener un producto con propiedades específicas", () => {
            carrito.agregarProducto({ name: "Producto Z", price: 15, quantity: 2 });
            expect(carrito.infoCarrito()).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ name: "Producto Z", price: 15 })
                ])
            );
        });        
        it("Debe estar vacío al inicio", () => {
            expect(carrito.infoCarrito()).toStrictEqual([]);
        });
        
        
    });