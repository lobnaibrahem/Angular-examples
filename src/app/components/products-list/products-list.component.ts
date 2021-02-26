import { Component, OnInit } from '@angular/core';
import { APIProductService } from 'src/app/services/apiproduct.service';
import { APIProduct } from 'src/app/veiwModels/apiproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  
  ProductList: APIProduct[]=[];

  constructor(private apiPrd:APIProductService) { }

  ngOnInit(): void {
    this.apiPrd.getAllProducts().subscribe(
      (res)=>{
        this.ProductList = res;
        console.log(this.ProductList)
      },
      (err)=>{console.log(err)}
    )
  }

}
