class Persona {
  constructor(nombre, edad, sexo, peso, altura, anoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = anoNacimiento;
  }

  mostrarGeneracion() {
    const resultado = document.getElementById("resultado");
    let mensaje = "";

    if (this.anoNacimiento >= 1930 && this.anoNacimiento < 1949) {
      mensaje =
        "<p>Perteneces a la Silent Generation y tu rasgo caracteristico es la Austeridad😑</p>";
    } else if (this.anoNacimiento >= 1949 && this.anoNacimiento < 1969) {
      mensaje =
        "<p>Perteneces a la generacion Baby Boom y tu rasgo caracteristico es la Ambicion🤑</p>";
    } else if (this.anoNacimiento >= 1969 && this.anoNacimiento < 1981) {
      mensaje =
        "<p>Perteneces a la Generacion X y tu rasgo caracteristico es la Obsesion por el Exito😎</p>";
    } else if (this.anoNacimiento >= 1981 && this.anoNacimiento < 1994) {
      mensaje =
        "<p>Perteneces a la Generacion Y (Millennials) y tu rasgo caracteristico es la Frustracion😞</p>";
    } else if (this.anoNacimiento >= 1994 && this.anoNacimiento < 2025) {
      mensaje =
        "<p>Perteneces a la Generacion Z y tu rasgo caracteristico es la Irreverencia😝</p>";
    } else {
      mensaje = "<p>Año de nacimiento invalido</p>";
    }

    resultado.innerHTML = mensaje;
  }

  esMayorDeEdad() {
    const resultado = document.getElementById("resultado");
    if (this.edad >= 18) {
      resultado.textContent = "Eres mayor de edad";
    } else {
      resultado.textContent = "Eres menor de edad";
    }
  }

  mostrarDatos() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <h2>${this.nombre}</h2>
    <ul>
        <li>Edad: ${this.edad}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Altura: ${this.altura}cm</li>
        <li>Peso: ${this.peso}kg</li>
        <li>Año de Nacimiento: ${this.anoNacimiento}</li>
        </ul>`;
  }
}

let usuario = null;

const formulario = document
  .getElementById("miFormulario")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const edad = parseInt(document.getElementById("edad").value);
    const sexo = document.getElementById("sexo").value;
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);
    const anoNacimiento = parseInt(
      document.getElementById("anioNacimiento").value
    );

    usuario = new Persona(
      nombre,
      edad,
      sexo,
      peso,
      altura,
      anoNacimiento
    );
    usuario.mostrarDatos();
  });

document
  .getElementById("mostrarGeneracion")
  .addEventListener("click", function () {
    if (usuario) {
      usuario.mostrarGeneracion();
    } else {
      alert("Primero crea una persona.");
    }
  });

document.getElementById("esMayorDeEdad").addEventListener("click", function () {
  if (usuario) {
    usuario.esMayorDeEdad();
  } else {
    alert("Primero crea una persona.");
  }
});
