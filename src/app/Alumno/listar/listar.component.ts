import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService}from '../../Service/service.service'
import { Alumno } from 'src/app/Modelo/Alumno';
  
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  
  alumnos:Alumno[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAlumnos()
    .subscribe(data=>{
      this.alumnos=data;
    })

  }
  Editar(alumno:Alumno):void{
    localStorage.setItem("id",alumno.id.toString())
    this.router.navigate(["edit"])
  }

}
