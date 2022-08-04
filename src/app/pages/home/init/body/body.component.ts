import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  images = [
    {
      path: 'assets/img/emp_canela.png',
      text: ' Galletas con <br> sabor a Canela',
    },
    {
      path: 'assets/img/emp_chocolate.png',
      text: ' Galletas con <br> sabor a Chocolate',
    },
    {
      path: 'assets/img/emp_mantequilla.png',
      text: ' Galletas con <br> sabor a Mantequilla',
    },
    {
      path: 'assets/img/emp_naranja.png',
      text: ' Galletas con <br> sabor a Naranja',
    },
    {
      path: 'assets/img/emp_polvorosas.png',
      text: ' Galletas con <br> sabor a Vainilla',
    },
    {
      path: 'assets/img/emp_colita.png',
      text: ' Galletas con <br> sabor a Colita',
    },
    {
      path: 'assets/img/emp_limon.png',
      text: ' Galletas con <br> sabor a Limón',
    },
    {
      path: 'assets/img/emp_coco.png',
      text: ' Galletas con <br> sabor a Coco',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
