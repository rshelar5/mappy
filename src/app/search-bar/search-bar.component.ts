import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchSupportService } from '../services/search-support.services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchSupportService: SearchSupportService) {

   }

  @Input()
  searchButtons: string[] = [];

  searchKey = '';

  ngOnInit(): void {
  }

  cleanSearchBox(){
    this.searchKey= '';
    this.searchSupportService.searchCleared.next(true);
    this.searchSupportService.products.next([]);
    this.searchSupportService.pureIngredient.next([]);
  }
  search(searchButton:string){
    if( this.searchKey!== '' && this.searchKey.length > 2)
    {
      this.searchSupportService.searchButton.next(searchButton);

      switch(searchButton){
        case "Ingredients":
          this.searchSupportService.getHazmatClassification(this.searchKey);
          break;
        case "Essential Oil":
          this.searchSupportService.getHazmatClassification(this.searchKey);
          break;
        case "Pure Ing.":
          this.searchSupportService.getPureIngredients(this.searchKey);
          break;

      }
      this.searchSupportService.searchKey.next(searchButton + ' '+ this.searchKey)
    }

  }

}
