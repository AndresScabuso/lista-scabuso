import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  public alumnos: Alumno[] = [
    new Alumno('David','Perez', new Date(2000,7,12), 7),
    new Alumno('Javier', 'Dominguez', new Date(1995,11,12), 3),
    new Alumno('Lucas', 'Rodriguez', new Date(1998,3,21), 10),
    new Alumno('Juan', 'Lopez', new Date(2001,5,3), 6)
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  agregarAlumno(
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    nota: number
  )
  {
    this.alumnos.push(new Alumno(nombre, apellido, fechaNacimiento, nota))
  }
}
