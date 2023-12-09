import { Component } from '@angular/core';
import { Issues } from '../../interfaces/issues';
import { ComicvineapiService } from '../../services/comicvineapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  name?: string;
  isslist?: Array<Issues>;
  filteredIssues: Array<Issues> = [];
  itemsPerPage: number = 30;
  currentPage: number = 1;
  totalPages: number = 1;
  showloader=true;
  constructor(private service: ComicvineapiService, private route: Router) {
    this.isslist = [];
    this.filteredIssues = [];
  }

  ngOnInit(): void {
    this.GetIssues();
  }

  GetIssues() {
    this.showloader=true
    this.service.getIssues()
      .subscribe((result) => {
        this.isslist = result;
        this.showloader=false
        this.filteredIssues = result;
        this.updateFilteredIssues();
        console.table(result);
      });
  }

  filterIssues() {
    this.currentPage = 1; // Reset to the first page when filtering
    this.updateFilteredIssues();
  }

  updateFilteredIssues() {
    if (this.isslist) {
      const searchTerm = this.name?.toLowerCase() || '';
      this.filteredIssues = this.isslist.filter(issue =>
        issue.volume.name.toLowerCase().includes(searchTerm)
      );

      // Update total pages
      this.totalPages = Math.ceil((this.filteredIssues.length || 1) / this.itemsPerPage);
    }
  }

  // Function for pagination
  paginateIssues(): Array<Issues> {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredIssues.length);
    return this.filteredIssues.slice(startIndex, endIndex);
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
