"use strict";
// Vamos a mejorar ¡aún más! nuestra calculadora geométrica sencilla. En el programa definiremos la clase Polygon, Square y Triangle para polígonos regulares (todos sus lados miden lo mismo). Ya os imagináis por dónde van los tiros: las clases Square y Triangle serán subclases de Polygon. La clase Polygon tendrá, al menos:
// Un atributo para el número de lados (numberOfSides)
// Dos atributos más: para la longitud de la base (base) y de la altura (height)
// Un método para calcular el perímetro (perimeter) (multiplicar la longitud del lado base por el número de lados)
// Un método para calcular el área (area) (multiplicar base por altura)

// La subclase Square tendrá:
// Un atributo lado (side) igual a la base

// Un constructor que recibirá exclusivamente la longitud del lado

// La subclase Triangle tendrá:
// Un constructor que recibirá base y altura

// Un método area() que sobrescibirá al de la clase base. Devolverá la mitad de lo que devuelva llamar al área de la clase base (super.area() / 2)

// Crearemos dos instancias: un cuadrado de 4 de lado y un triángulo de 4 de base y 3 de altura. Llamaremos a los dos métodos en todas las instancias.

class Polygon{
  constructor (numberofSides, base, height){
    this.numberofSides = numberofSides;
    this.base = base;
    this.height = height;
  }
  perimeter(){
    return this.base * this.numberofSides;
  }
  area(){
    return this.base * this.height;
  }
}


class Square extends Polygon{
  constructor(height){
    super(height);
    this.side = base;
  }
}


class Triangle extends Polygon{
  constructor(base, height){
    super(base, height);
  }
  area(){
    (super.area() / 2)
  }
}

  
// Crearemos dos instancias: un cuadrado de 4 de lado y un triángulo de 4 de base y 3 de altura. Llamaremos a los dos métodos en todas las instancias.

const square = new Polygon(4,4,4);

console.log(square .perimeter());
console.log(square .area());


const triangle = new Polygon(3,4,3);

console.log(triangle .perimeter());
console.log(triangle.area());

const newTriangle = new Triangle(3, 4, 3);
// La function area() de la subclase Triangle
console.log(newTriangle.area());
