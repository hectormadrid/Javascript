// ===== Reto 1: Rectángulo =====
// Crea la clase Rectangulo. Su constructor recibe ancho y alto, y tiene estos métodos:
//   area()        devuelve ancho × alto
//   perimetro()   devuelve 2 × (ancho + alto)
//   esCuadrado()  devuelve true si el ancho y el alto son iguales
//
// Ejemplo:
//   const r = new Rectangulo(3, 4);
//   r.area()  →  12
//
// Repasa: 13-clases/01-clases.js

class Rectangulo {
  // Escribe tu código aquí
}

// ===== Pruebas (no hace falta tocarlas) =====
// Guarda el archivo y pulsa «Ejecutar de nuevo»: ✅ = la prueba pasa, ❌ = algo falla.
probar("área de 3 × 4", () => new Rectangulo(3, 4).area(), 12);
probar("perímetro de 3 × 4", () => new Rectangulo(3, 4).perimetro(), 14);
probar("3 × 4 no es un cuadrado", () => new Rectangulo(3, 4).esCuadrado(), false);
probar("5 × 5 es un cuadrado", () => new Rectangulo(5, 5).esCuadrado(), true);
