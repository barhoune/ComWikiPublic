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
  Offset = 1;
  SearchResult?: Array<SearchResponse>;
  showloader = false;
  showmessage = false;

  getResults() {
    this.showloader = true;
    this.showmessage = false; // Reset the showmessage variable
    this.SearchResult = [];

    this.service.searchData(this.Query, this.resSelect, this.Offset)
      .subscribe((results) => {
        this.showloader = false;

        if (results && results.length > 0) {
          this.SearchResult = results;
        } else {
          this.showmessage = true;
        }

        console.table(results);
      }, (error) => {
        this.showloader = false;
        console.error('Error fetching search results:', error);
      });
  }
}
