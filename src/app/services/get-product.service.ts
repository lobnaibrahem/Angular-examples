import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../veiwModels/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  // A6 Q4
  constructor(private http :HttpClient) { }
  // get products
  getAllProducts() :Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.API_URL}/products`);
  }
  // get product by id
  getProductsByID(ID:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.API_URL}/products/${ID}`)
  }
  // get product by category id
 	getProductsByCategoryID(catID:number):Observable<IProduct[]>{
     return this.http.get<IProduct[]>(`${environment.API_URL}/products?CateogryID=${catID}`)
   }
  //  add new product
   addProduct(Prd:IProduct):Observable<any>{
    return this.http.post<any>(`${environment.API_URL}/products`,Prd)
  }
}
