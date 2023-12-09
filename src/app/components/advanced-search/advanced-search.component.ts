import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResponse } from 'src/app/interfaces/search-response';
import { ComicvineapiService } from 'src/app/services/comicvineapi.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent {
  constructor(private service: ComicvineapiService, private route: Router) {
  }
 resSelect: string = "character";
  Query!: string;
  Offset=1;
  SearchResult?: Array<SearchResponse>;
  // resSelect = [
  //   { name: 'Character', value: 'character', link:"['/characters/character',item.id] "},
  //   { name: 'Volumes', value: 'volume', link:'/volumes/volume' },
  // ]
  getResults(){

    this.service.searchData(this.Query, this.resSelect, this.Offset)
    .subscribe((results) =>{
      this.SearchResult= results;
      console.table(results);
    });
  }
}
