import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/Modelo/Carrito';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  carrito:Carrito= new Carrito(); 
  constructor() { }

  ngOnInit(): void {
  }

}
