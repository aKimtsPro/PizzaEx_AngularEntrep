import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-menu-pizza',
  templateUrl: './menu-pizza.component.html',
  styleUrls: ['./menu-pizza.component.css']
})
export class MenuPizzaComponent implements OnInit {

  pizzaList: Plat[] = [
    {
      nom: "pizza vesuvio",
      prix: 15
    },
    {
      nom: "pizza hawaienne",
      prix: 10
    },
    {
      nom: "pizza  4 fromages",
      prix: 8
    },
    {
      nom: "pizza spéciale",
      prix: 13
    }  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
