import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Alumno } from '../Modelo/Alumno';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  alumno:Alumno
  constructor(private http:HttpClient) { }

  url='http://localhost:8090/v1';

  
  getAlumnos(){
    return this.http.get<Alumno[]>(this.url+"/notas");  
  }
  createAlumno(alumno:Alumno){
    return this.http.post<Alumno>(this.url+"/guardarnota", alumno);
  }
  getAlumnoId(id:number){
    return this.http.get<Alumno>(this.url+"/notas"+id)
  }
  updateAlumno(alumno:Alumno){
    return this.http.put<Alumno>(this.url+"/actualizarnota"+alumno.id,alumno)
  }
}
