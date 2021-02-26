import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location} from '@angular/common';
//import { GetProductsService } from 'src/app/services/get-products.service';
import { IProduct } from 'src/app/veiwModels/iproduct';
import { GetProductService } from 'src/app/services/get-product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnDestroy{
  product: IProduct | null = null;

  Pid:number = 0;
  
  Pqunt:number = 0;
  
  Subscription: Subscription[] | undefined ;

  constructor(private activatedRoute : ActivatedRoute ,
              private products:GetProductService ,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
      let sub= this.activatedRoute.paramMap.subscribe(( params : ParamMap )=>{
      let pharm:string|null =params.get('ID');
      let pharm2: string|null = params.get('cont');
      this.Pqunt = (pharm2)? parseInt(pharm2) : 0;  
      this.Pid = (pharm)? parseInt(pharm) : 0;  

      // A6 Q6 getProduct detalis
      var sub2 = this.products.getProductsByID(this.Pid).subscribe(
        (res)=>{
          this.product = res;
        },
        (err)=>{ console.log(err)}
      )
      this.Subscription?.push(sub2);
    });
    
    this.Subscription?.push(sub);
    
    // let pharm:string|null = this.activatedRoute.snapshot.paramMap.get('ID');
    // this.Pid =(pharm)? parseInt(pharm) : 0;  
    // this.product = this.products.getProductByID(this.Pid)
    console.log(this.product)
  }
  returnBack(){
    this.location.back()
  }
  previous(){
    this.router.navigate(['/product',this.Pid - 1,this.Pqunt])
  }
  next(){
    this.router.navigate(['/product',this.Pid + 1,this.Pqunt])
  }

   // A6 Q7 unsubscribe
  ngOnDestroy(): void {
    this.Subscription?.forEach(element => {
      element.unsubscribe();
    });
  }

}
