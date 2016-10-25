import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

   id: number;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
    this.id = +params['id'];
      
    });

  }

}
