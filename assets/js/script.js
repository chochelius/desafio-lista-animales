console.log("conectado!")

class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return  `El nombre del propietario es ${this.nombre}. El domicilio es ${this.direccion}. Y el número de contacto es ${this.telefono}.`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this.tipo = tipo;
    }
    get getTipo() {
        return this.tipo;
    } 
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad
    }
    datosPropietario() {
        return  `El nombre del propietario es ${this.nombre}. El domicilio es ${this.direccion}. Y el número de contacto es ${this.telefono}.`;
    }

}

const formulario = document.getElementById("formulario");
const nombrePropietario = document.getElementById("propietario");
const telefonoPropietario = document.getElementById("telefono");
const direccionPropietario = document.getElementById("direccion");
const nombreMascotaPropietario = document.getElementById("nombreMascota");
const tipoMascotaPropietario = document.getElementById("tipo");
const enfermedadMascotaPropietario = document.getElementById("enfermedad");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevoDueno = new Mascota(
        nombrePropietario.value, direccionPropietario.value, telefonoPropietario.value, tipoMascotaPropietario.value, nombreMascotaPropietario.value, enfermedadMascotaPropietario.value
    )
    console.log(nuevoDueno);
    console.log(nuevoDueno.datosPropietario());

    const element = document.getElementById("resultado");
    element.innerHTML = `<ul>${nuevoDueno.datosPropietario()}</ul>
    <br>
    <ul> El tipo de animal es un ${nuevoDueno.tipo}, mientras que el nombre de la mascota es: ${nuevoDueno.nombreMascota} y la enfermedad es ${nuevoDueno.enfermedad}.</ul>
    `

})
