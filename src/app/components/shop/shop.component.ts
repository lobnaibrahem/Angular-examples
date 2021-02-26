import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetCategoryService } from 'src/app/services/get-category.service';
import { ICategory } from 'src/app/veiwModels/icategory';
import { ShopDetailsComponent } from '../shop-details/shop-details.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {


  CategoryList:ICategory[] =[];
  
  selectedID:number = 0;

  totalPrice:number =0 ;

  Subscription: Subscription | undefined ;
 
  constructor(private getCat:GetCategoryService) { 
    
    // //CATEGORY LIST
    // this.CategoryList = [
    //   {id:1,Name:"Samsung"},
    //   {id:2,Name:"Relme" },
    //   {id:3,Name:"Hwawii"  }]
  }

    onPrcChanged(prc:number){
      this.totalPrice = prc;
    }
    ontotalPrice(p:number){
      this.totalPrice = p;

    }
    // A6 Q6 GET cateogry from api
    ngOnInit(): void {
    this.Subscription = this.getCat.getAllCateogories().subscribe(
       (res)=>{this.CategoryList =res},
       (err)=>{console.log(err)}
     )
    }
    // A6 Q7 unsubscribe
    ngOnDestroy(): void {
      this.Subscription?.unsubscribe();
    }
  

}
