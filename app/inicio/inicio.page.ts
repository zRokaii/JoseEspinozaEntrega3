import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})




export class InicioPage implements OnInit {

  componentes: Componente [] = [
  {

   icon: "medkit-outline",
   name: "Salud",
   redirecTo: "/salud"
  },

  {

    icon: "cellular-outline",
    name: "Tecnologia",
    redirecTo: "/tecnologia"
   },
   {
      
    icon: "game-controller-outline",
    name: "Juegos",
    redirecTo: "/juegos"
   },
   {

    icon: "airplane-outline",
    name: "Paises",
    redirecTo: "/paises"


   },

   {
   icon:"newspaper-outline",
   name: "Noticias",
   redirecTo: "/noticias"
   },
   {
    icon:"book-outline",
    name: "Mis Datos",
    redirecTo: "/datos"
  }
 

   
  ]
  constructor() { }

  ngOnInit() {
  }

}
