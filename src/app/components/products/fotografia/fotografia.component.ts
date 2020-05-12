import { Component, OnInit } from '@angular/core';
import { Products, Departments } from 'src/app/Data/data';
import { ProductsInterface } from 'src/app/interfaces/ecommerce.interfaces';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  public productsShow: Array<ProductsInterface> = [];

  constructor() {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let Departamento = Departments.find(
      (departamento) => departamento.department === 'Fotografía'
    );

   
   from(Products).pipe(
     filter((producto)=>producto.department===Departamento.id),
     map(producto=>{
       let direccionImg=`./../../../../assets/${producto.img}`;
       return{...producto,img:direccionImg
      };
     }),
     tap(productoActualizado=>
      this.productsShow.push(productoActualizado)
     )
   )
   .subscribe()
  }
}
