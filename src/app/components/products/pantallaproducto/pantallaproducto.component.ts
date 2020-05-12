import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from "../../../interfaces/ecommerce.interfaces";
import { Products } from "../../../Data/data";
import { ActivatedRoute } from "@angular/router";
import { from, Observable } from 'rxjs';
import { filter, map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pantallaproducto',
  templateUrl: './pantallaproducto.component.html',
  styleUrls: ['./pantallaproducto.component.css']
})
export class PantallaproductoComponent implements OnInit {
 public mostrar=false;
 public product:ProductsInterface;

  constructor(private AR:ActivatedRoute) {
    this.AR.params.pipe(
      pluck('id'),
      switchMap(id=>this.GetProduct(id))
    )
    .subscribe((valor)=>(this.product=valor));
    window.scroll(0,0)
   }


  ngOnInit(): void { }

public GetProduct(id:number){
  return from(Products).pipe(
    filter((producto)=>producto.id==id),
    map((producto)=>({
      ...producto,img:`../../../../assets/${producto.img}`,
    }))
  );
}
}
