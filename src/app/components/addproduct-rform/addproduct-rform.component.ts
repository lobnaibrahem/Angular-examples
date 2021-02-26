import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetCategoryService } from 'src/app/services/get-category.service';
import { GetProductService } from 'src/app/services/get-product.service';
import { ICategory } from 'src/app/veiwModels/icategory';
import { IProduct } from 'src/app/veiwModels/iproduct';

@Component({
  selector: 'app-addproduct-rform',
  templateUrl: './addproduct-rform.component.html',
  styleUrls: ['./addproduct-rform.component.scss']
})
export class AddproductRFormComponent implements OnInit {

  CategoryList:ICategory[] =[];
  
  APIProdcuct:IProduct;

  Products: IProduct[] = [];

 addProduct = this.formb.group({
      id:['',[Validators.required]],
      Name:['',[Validators.required]],
      Price:['',[Validators.required]],
      Quantity:['',[Validators.required]],
      CateogryID:['',[Validators.required]]
  })


  constructor( private productsList:GetProductService,
               private router:Router,
               private getCat:GetCategoryService ,
               private formb:FormBuilder) { this.APIProdcuct ={id:1,Name:"",Price:2,Quantity:3,Img:'imgUrl',CateogryID:1} }

  ngOnInit(): void {
    this.productsList.getAllProducts().subscribe(
      (res)=>{
        this.Products = res;
      },
      (err)=>{console.log(err)}
    )
     this.getCat.getAllCateogories().subscribe(
      (res)=>{this.CategoryList = res },
      (err)=>{console.log(err)}
    )
  }
  
  addNewProductRform(){
    this.productsList.addProduct(this.addProduct.value).subscribe(
      (res)=>{
      console.log(res) 
      this.router.navigate(['/about'])
     },
      (err)=>{ console.log(err) }
    )
  }

}
