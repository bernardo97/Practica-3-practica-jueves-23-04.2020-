import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 nombre:string;
 promedio:number;
 estudiantes:datos[]=[];

 insertar(){
  let aux:datos={
nombre:this.nombre,
promedio:this.promedio
  }
  this.estudiantes.push(aux);
  console.log(this.estudiantes);
  this.nombre="";
  this.promedio=0;

  document.getElementById("formGroupExampleInput").focus;

 }
 eliminar(nombre,e){
let index=this.estudiantes.findIndex(p => p.nombre === nombre);
this.estudiantes.splice(index,1);
alert("Se ha eliminado Correctamente"+e.type);
 }
}

interface datos{
  nombre:string;
 promedio:number;
}
