import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../veiwModels/icategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {
  // A6 Q3

  constructor( private http: HttpClient ) { }
  
  // get all categories
  getAllCateogories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${environment.API_URL}/Category`)
  } 
}
