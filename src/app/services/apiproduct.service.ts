import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIProduct } from '../veiwModels/apiproduct';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class APIProductService {
  
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<APIProduct[]> {
   return this.http.get<APIProduct[]>('https://reqres.in/api/product').pipe(map((res)=> res.data ))
  }

}

