import { Component, OnInit } from '@angular/core';
import { GetProductService } from 'src/app/services/get-product.service';
import { IProduct } from 'src/app/veiwModels/iproduct';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  Products: IProduct[] = [];
  
  constructor(private productsList:GetProductService) { }

  ngOnInit(): void {
    this.productsList.getAllProducts().subscribe(
      (res)=>{
        this.Products = res;
      },
      (err)=>{console.log(err)}
    )
  }

}
