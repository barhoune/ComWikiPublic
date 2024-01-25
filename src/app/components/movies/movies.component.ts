import { Component } from '@angular/core';
import { Movies } from '../../interfaces/movies';
import { ComicvineapiService } from '../../services/comicvineapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
[x: string]: any;
  movlist?: Array<Movies>;
  filteredMovlist: Array<Movies> = [];
  searchInput: string = '';
  itemsPerPage: number = 24;
  currentPage: number = 1;
  totalPages: number = 1;
  showloader=true;
  constructor(private service: ComicvineapiService, private route: Router) {
    this.movlist = [];
  }

  ngOnInit(): void {
    this.GetMovies();
  }

  GetMovies() {
    this.showloader=true;
    this.service.getMovies()
      .subscribe((result) => {
        this.movlist = result || [];
        this.showloader=false;
        this.updateFilteredMovies();
        console.table(result);
      });
  }

  filterMovies(event: any) {
    this.currentPage = 1;
    this.updateFilteredMovies();
  }

  updateFilteredMovies() {
    const searchTerm = this.searchInput.toLowerCase();
    this.filteredMovlist = (this.movlist || [])
      .filter(movie => movie.name.toLowerCase().includes(searchTerm));

    this.totalPages = Math.ceil((this.filteredMovlist.length || 1) / this.itemsPerPage);
  }

  paginateMovies(): Array<Movies> {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredMovlist.slice(startIndex, endIndex);
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
