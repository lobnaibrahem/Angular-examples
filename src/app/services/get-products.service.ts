import { Injectable } from '@angular/core';
import { IProduct } from '../veiwModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private ProductList:IProduct[];

  constructor() { 
    //PRODUCT LIST
    this.ProductList=[
      {id:1,Name:"product 1",Quantity:20,Price:500,Img:" img ",CateogryID:1},
      {id:2,Name:"product 2",Quantity:20,Price:1,Img:" img ",CateogryID:1},
      {id:3, Name:"product 3",Quantity:20,Price:500,Img:" img ",CateogryID:1},
      {id:4,Name:"product 4",Quantity:1,Price:500,Img:" img ",CateogryID:2},
      {id:5,Name:"product 5",Quantity:20,Price:500,Img:" img ",CateogryID:2},
      {id:6,Name:"product 6",Quantity:20,Price:500,Img:" img ",CateogryID:2},
      {id:7,Name:"product 7",Quantity:20,Price:600,Img:" img ",CateogryID:3},
      {id:8,Name:"product 8",Quantity:20,Price:900,Img:" img ",CateogryID:3},
      {id:9,Name:"product 9",Quantity:0,Price:900,Img:" img ",CateogryID:3}];
   
  }

  getProductsByCatID(catID:number): IProduct[]{
    return this.ProductList.filter((prd) =>{
      return prd.CateogryID == catID;
    })
  }

  getProductByID(prodID: number ): IProduct | null
  {
    let prd = this.ProductList.find( (prod) => prod.id == prodID )
    return (prd)? prd:null;
  }

}
