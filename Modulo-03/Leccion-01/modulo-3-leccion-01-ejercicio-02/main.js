"use strict";

// Vamos a mejorar nuestra calculadora geométrica sencilla. En el programa definiremos la clase Square, que tendrá al menos:
// Un atributo para la longitud del lado (side) del cuadrado
// Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados - 4)
// Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
// Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
// Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias.

class Square{
  constructor(length){
    this.length = length;
  }

  perimeter(){
    return this.length * 4;
  }
  area(){
    return this.length * this.length;
  }
}

const example1 = new Square(1);
console.log(example1.perimeter());
console.log(example1.area());

const example2 = new Square(3);
console.log(example2.perimeter());
console.log(example2.area());

const example3 = new Square(7);
console.log(example3.perimeter());
console.log(example3.area());

