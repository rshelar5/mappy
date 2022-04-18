import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchSupportService {
  getHazmatClassification(searchKey: string) {

    this.http.get<Product>(`http://localhost:8080/hazmatClassification/${searchKey}`).subscribe(val=>{
      this.searchKey.next(val.hazmatClassification);
    })
  }

  constructor(private http: HttpClient){

  }
  searchKey:Subject<String> = new Subject<String>()

  searchCleared:Subject<boolean> = new Subject<boolean>()




}
