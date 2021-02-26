import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetCategoryService } from 'src/app/services/get-category.service';
import { GetProductService } from 'src/app/services/get-product.service';
import { ICategory } from 'src/app/veiwModels/icategory';
import { IProduct } from 'src/app/veiwModels/iproduct';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit  {

  CategoryList:ICategory[] =[];
  
  APIProdcuct:IProduct;

  Products: IProduct[] = [];

  StaticProduct:IProduct ={id:20,Name:"product 11",Price:200,Quantity:20,Img:'imgUrl',CateogryID:1};

  constructor( private productsList:GetProductService,
               private router:Router,
               private getCat:GetCategoryService ) { this.APIProdcuct ={id:1,Name:"",Price:2,Quantity:3,Img:'imgUrl',CateogryID:1} }

  ngOnInit(): void {
    this.productsList.getAllProducts().subscribe(
      (res)=>{
        this.Products = res;
      },
      (err)=>{console.log(err)}
    )
     this.getCat.getAllCateogories().subscribe(
      (res)=>{this.CategoryList =res},
      (err)=>{console.log(err)}
    )
  }


    addNewStaticProduct(){
    this.productsList.addProduct(this.StaticProduct).subscribe(
      (res)=>{
      console.log(res) 
      this.router.navigate(['/about'])
     },
      (err)=>{ console.log(err) }
    )
  }
  addNewProduct(){
    if(this.APIProdcuct)
    this.productsList.addProduct(this.APIProdcuct).subscribe(
      (res)=>{
      console.log(res) 
      this.router.navigate(['/about'])
     },
      (err)=>{ console.log(err) }
    )
  }

}
