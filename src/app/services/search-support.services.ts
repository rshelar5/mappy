import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchSupportService {

  host = "http://localhost:8080/";
  getHazmatClassification(searchKey: string) {

    this.http.get<Product[]>(`${this.host}hazmatClassification/${searchKey}`)
      .subscribe(products=>{
        this.products.next(products);
    })
  }

  products:Subject<Product[]> = new Subject<Product[]>();

  constructor(private http: HttpClient){

  }
  searchKey:Subject<String> = new Subject<String>();

  searchButton:Subject<String> = new Subject<String>();

  searchCleared:Subject<boolean> = new Subject<boolean>();




}
