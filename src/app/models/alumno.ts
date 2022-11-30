export class Alumno {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    nota: number;

    constructor(
        nombre: string, 
        apellido: string, 
        fechaNacimiento: Date,
        nota: number) 
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.nota = nota;
    }

    public subirNota() {
        this.nota++;
    }

    public bajarNota() {
        this.nota--;
    }
}