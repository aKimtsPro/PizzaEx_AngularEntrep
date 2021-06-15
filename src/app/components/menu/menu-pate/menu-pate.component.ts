import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-menu-pate',
  templateUrl: './menu-pate.component.html',
  styleUrls: ['./menu-pate.component.css']
})
export class MenuPateComponent implements OnInit {


  pateList: Plat[] = [
    {
      nom: "pate à la carbonara",
      prix: 15
    },
    {
      nom: "pate au pesto",
      prix: 10
    },
    {
      nom: "pate bolo",
      prix: 8
    },
    {
      nom: "pate scampi",
      prix: 13
    }  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
