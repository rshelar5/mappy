import { Product } from './../interfaces/Product';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchSupportService } from '../services/search-support.services';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss'],
})
export class ResultContainerComponent implements OnInit {


  searchOptions:String = '';
  products:Product[] = [];
  searchButton:String = '';
  constructor(private searchSupportService: SearchSupportService) {
    this.searchSupportService.searchKey.subscribe(value=>{
      this.searchOptions = value;
      console.log(this.searchOptions)
    })
    this.searchSupportService.products.subscribe(products=>{
      this.products = products;
    })
    this.searchSupportService.searchButton.subscribe(searchButton=>{
      this.searchButton = searchButton;
    })

    this.searchSupportService.searchCleared.subscribe(cleared=>{
      if(cleared){
        this.searchOptions = '';
      }
    })
  }

  ngOnInit(): void {}
}
