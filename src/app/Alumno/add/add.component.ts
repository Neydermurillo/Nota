import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Alumno } from 'src/app/Modelo/Alumno';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
    this.gestionarAlumnoForm =this.fb.group({
        contenido : [null],
        nombre : [null],
        titulo : [null]
    });
   }

  public gestionarAlumnoForm : FormGroup;

  private alumno : Alumno;

  ngOnInit(): void {
    this.alumno = new Alumno();
  }

  Guardar() {
    this.alumno.contenido = this.gestionarAlumnoForm.controls.contenido.value;
    this.alumno.nombre = this.gestionarAlumnoForm.controls.nombre.value;
    this.alumno.titulo = this.gestionarAlumnoForm.controls.titulo.value;

    this.service.createAlumno(this.alumno)
      .subscribe(data => {
        alert("Se Agrego con Exito....!!!");
        console.log(data);
        this.router.navigate(["listar"]);
      })
  }
}
