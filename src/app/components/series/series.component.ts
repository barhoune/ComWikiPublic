import { Component } from '@angular/core';
import { ComicvineapiService } from '../../services/comicvineapi.service';
import { Router } from '@angular/router';
import { Series } from '../../interfaces/series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  name: string = '';
  serlist: Array<Series> = [];
  filteredSerlist: Array<Series> = this.serlist;
  currentPage: number = 1;
  itemsPerPage: number = 24;
  showloader=true;
  constructor(private service: ComicvineapiService, private route: Router) {}

  ngOnInit(): void {
    this.GetSeries();
  }

  GetSeries() {
    this.showloader=true;
    this.service.getSeries()
      .subscribe((result) => {
        this.serlist = result || [];
        this.filteredSerlist = this.serlist;
        console.table(result);
        this.showloader=false;
      });
  }

  filterTitles(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.currentPage = 1; // Reset current page to the first page
    this.filteredSerlist = this.serlist.filter((s) => s.name?.toLowerCase().includes(searchText));
  }

  getItemsToDisplay(): Array<Series> {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredSerlist.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredSerlist.length) {
      this.currentPage++;
    }
  }

  pagesArray(): number[] {
    const totalItems = this.filteredSerlist.length;
    const pageCount = Math.ceil(totalItems / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  viewSeries(series: Series) {

    console.log('Viewing series:', series);

  }
}
