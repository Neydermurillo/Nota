import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Alumno } from 'src/app/Modelo/Alumno';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  alumno :Alumno=new Alumno()
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
    this.gestionarAlumnoForm =this.fb.group({
        contenido : [null],
        nombre : [null],
        titulo : [null]
    });
   }
   public gestionarAlumnoForm : FormGroup;

  ngOnInit(){
    this.Editar()
  }

  Editar(){
    this.alumno.contenido = this.gestionarAlumnoForm.controls.contenido.value;
    this.alumno.nombre = this.gestionarAlumnoForm.controls.nombre.value;
    this.alumno.titulo = this.gestionarAlumnoForm.controls.titulo.value;
    let id=localStorage.getItem("id")
    this.service.getAlumnoId(+id)
    .subscribe(data=>{
      this.alumno=data
      
    })
  }

}
