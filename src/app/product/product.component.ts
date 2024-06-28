import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../Services/productservice.service';
import { Product } from '../Models/product.model';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

products! : Array<Product>;
ErrorMassage! : string;
  constructor(private productsservice :ProductserviceService){}
 ngOnInit(): void {
  this.getAallData();
 }
 getAallData()
 {
  this.productsservice.getAllProducts().subscribe(
    {
      next : (data)=>{
        this.products=data;

      },
      error : (err)=>{
        this.ErrorMassage = err;
      }
    }
  );
 }
 DeleteProduct(p: Product)
 {
  let conf =confirm("are  you sure?")
  if(!conf) return;
  this.productsservice.DeleteProduct(p.id).subscribe({
    next : (data)=>{
      let index = this.products.indexOf(p);
      this.products.splice(index,1);
    },
    error : (err)=>{
      this.ErrorMassage = err;
    }
  });
 }
  SetPromotion(p  : Product)
  {
    let promo =p.promotion;
    this.productsservice.SetPromotion(p.id).subscribe({
      next : (data : boolean): void =>{
        p.promotion=!promo;
      },
      error : err =>{
        this.ErrorMassage = err;
      }
    });
  }


}
