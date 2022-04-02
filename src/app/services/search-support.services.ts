import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchSupportService {

  constructor(){

  }
  searchKey:Subject<String> = new Subject<String>()

  searchCleared:Subject<boolean> = new Subject<boolean>()



}
