import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, PureIngredient } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchSupportService {

  host = "http://localhost:4400/";
  getHazmatClassification(searchKey: string) {

    this.http.get<Product[]>(`${this.host}hazmatClassification/${searchKey}`)
      .subscribe(products=>{
        this.products.next(products);
    })
  }

  getPureIngredients(searchKey: string) {
    this.http.get<PureIngredient[]>(`${this.host}pure-ingredients/${searchKey}`)
      .subscribe(pureIngredient=>{
        this.pureIngredient.next(pureIngredient);
    })
  }

  products:Subject<Product[]> = new Subject<Product[]>();
  pureIngredient:Subject<PureIngredient[]> = new Subject<PureIngredient[]>();

  constructor(private http: HttpClient){

  }
  searchKey:Subject<String> = new Subject<String>();

  searchButton:Subject<String> = new Subject<String>();

  searchCleared:Subject<boolean> = new Subject<boolean>();




}
