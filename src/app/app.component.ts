import { SearchSupportService } from './services/search-support.services';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(private searchSupportService: SearchSupportService){
  }
  title = 'alchemy';

  searchKey = new Subject<String> ();
  buttonTitles = ['Ingredients', 'Pure Ing.', 'Essential Oil'];
  //buttonTitles$ : Observable<string[]> ;




}
