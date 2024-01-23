import { Component } from '@angular/core';
import { Characters } from '../../interfaces/characters';
import { ComicvineapiService } from '../../services/comicvineapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  name?: string;
  charlist: Array<Characters> = [];
  filteredCharlist: Array<Characters> = [];
  selectedCharacter: any;
  currentPage: number = 1;
  itemsPerPage: number = 24;
  totalPages: number = 1;
  showloader = true;
  offset = 146;

  constructor(private service: ComicvineapiService, private route: Router) {}

  ngOnInit(): void {
    this.GetCharacters(this.offset);
  }

  GetCharacters(offset: any) {
    this.showloader = true;
    this.charlist = [];
    this.filteredCharlist = [];
    this.service.getCharacters(offset).subscribe((result) => {
      this.charlist = result;
      this.showloader = false;
      this.filteredCharlist = result;
      this.totalPages = Math.ceil(this.filteredCharlist.length / this.itemsPerPage);
      console.table(result);
    });
  }

  filterCharacters(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.currentPage = 1;
    this.filteredCharlist = this.charlist.filter((c: any) => {
      return c.name.toLowerCase().includes(searchTerm) || c.publisher.name.toLowerCase().includes(searchTerm);
    });
    this.totalPages = Math.ceil(this.filteredCharlist.length / this.itemsPerPage);
    window.scrollTo(0, 0); // Scroll to top
  }

  getItemsToDisplay(): Array<Characters> {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredCharlist.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      window.scrollTo(0, 0); // Scroll to top
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
      this.offset = this.offset + 100;
      console.log(this.offset);
      this.GetCharacters(this.offset);
    }
    window.scrollTo(0, 0); // Scroll to top
  }

  pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo(0, 0); // Scroll to top
    }
  }

  getPublisherColor(publisherName: string): string {
    if (publisherName.toLowerCase() === 'dc comics') {
      return '#455BE8';
    } else if (publisherName.toLowerCase() === 'marvel') {
      return '#D11423';
    } else {
      return '';
    }
  }
}
