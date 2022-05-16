import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  color: any;
  images = [
    {
      path: 'assets/img/emp_canela.png',
      path_fruta: 'assets/img/canela_fruta.png'
    },
    {
      path: 'assets/img/emp_chocolate.png',
      path_fruta: 'assets/img/chocolate_fruta.png'
    },
    {
      path: 'assets/img/emp_mantequilla.png',
      path_fruta: 'assets/img/mante_fruta.png'
    },
    {
      path: 'assets/img/emp_naranja.png',
      path_fruta: 'assets/img/naranja_fruta.png'
    },
    {
      path: 'assets/img/emp_polvorosas.png',
      path_fruta: 'assets/img/vainilla_fruta.png'
    },
    {
      path: 'assets/img/emp_colita.png',
      path_fruta: 'assets/img/colita_fruta.png'
    },
    {
      path: 'assets/img/emp_limon.png',
      path_fruta: 'assets/img/limon_fruta.png'
    },
    {
      path: 'assets/img/emp_coco.png',
      path_fruta: 'assets/img/coco_fruta.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.color);
  }

}
