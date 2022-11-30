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
        if(this.nota < 10)
            this.nota++;
    }

    public bajarNota() {
        if(this.nota > 0)
            this.nota--;
    }
}