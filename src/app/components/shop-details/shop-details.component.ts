import { EventEmitter, OnDestroy } from '@angular/core';
import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetProductService } from 'src/app/services/get-product.service';
// import { GetProductsService } from 'src/app/services/get-products.service';
import { IProduct } from 'src/app/veiwModels/iproduct';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit ,OnDestroy {

  @Input() catVar :number =0 ;

  @Output() totalPriceChanged : EventEmitter<number> = new EventEmitter<number>();

  orderTotal:number =0;
  
  selectedOptionA:any;
  
   productListOfCatID : IProduct[] =[];

   Subscription: Subscription | undefined ;

  //  A5 Q1
  constructor(private getProducts:GetProductService ,private router:Router ) {}

  //  A6 Q6 getProducts by catID
  
  ngOnChanges(changes: SimpleChanges): void {
    this.Subscription = this.getProducts.getProductsByCategoryID(this.catVar).subscribe(
      (res)=>{ this.productListOfCatID = res; },
      (err)=>{ console.log(err) }
    )
  }


    buyItem(price:number , count:string){
        this.orderTotal += (price * parseInt(count) );
        this.totalPriceChanged.emit(this.orderTotal)
    }
    details(Pid:number , Pqant:number){
      this.router.navigate(['/product',Pid,Pqant]).then(()=>{
        console.log(' navegation completeted '+ Pid + Pqant )
      })
      console.log(' navegation completeted '+ Pid + Pqant )
    }
    
  ngOnInit(): void {
  }

  // A6 Q7 unsubscribe
  ngOnDestroy(): void {
      this.Subscription?.unsubscribe();
  }
}
