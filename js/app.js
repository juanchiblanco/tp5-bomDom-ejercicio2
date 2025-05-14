const usuario = {
    nombre: document.getElementById('name').value,
    edad: document.getElementById('edad').value,
    sexo: document.getElementById('sexo').value,
    altura: document.getElementById('altura').value,
    peso: document.getElementById('peso').value,
    anioNacimiento: document.getElementById('anioNacimiento').value,

    mostrarDatos(){
        document.writeln(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Edad: ${this.edad}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Altura: ${this.altura} cm</li>
            <li>Peso: ${this.peso} kg</li>
            <li>Año de Nacimiento: ${this.anioNacimiento}</li>
            </ul>`)
    }
}