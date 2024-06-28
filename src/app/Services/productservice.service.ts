import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private  products! : Array<Product>;

  constructor() {

    this.products= [
      {id:1 , name: "Voiture" , prix: 50000 , promotion : true},
      {id:2 , name: "Printer" , prix: 2000, promotion : false},
      {id:3 , name: "Computer" , prix: 10000, promotion : true},
      {id:4 , name: "Headphone" , prix: 500, promotion : false},
      {id:5 , name: "Smart Phone" , prix: 7000, promotion : true},
      {id:6 , name: "keyboard" , prix: 300, promotion : false},
      {id:7 , name: "Laptop" , prix: 40000, promotion : false},
      {id:8 , name: "House" , prix: 150000, promotion : true},
      {id:9 , name: "Desktop" , prix: 6500, promotion : false},
      {id:10 , name: "Bed" , prix: 1000, promotion : true},

    ]
   }
  getAllProducts() : Observable<Product[]>
  {
    return of(this.products);
  }
  DeleteProduct(id : number) : Observable<boolean>
  {
    this.products.filter(p=>p.id!=id);
    return of(true);
  }
  public SetPromotion(id  : number) : Observable<boolean> {
    let product = this.products.find(p=>p.id);
    if(product!=undefined)
    {
      product.promotion=!product.promotion;
      return of(true)
    }
    else
     return  throwError(()=>new Error("product not found"))
  }
}
