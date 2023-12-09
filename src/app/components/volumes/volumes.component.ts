import { Component } from '@angular/core';
import { Volumes } from '../../interfaces/volumes';
import { ComicvineapiService } from '../../services/comicvineapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent {
  name?: string;
  vollist?: Array<Volumes>;
  filteredVolumes: Array<Volumes> = [];
  itemsPerPage: number = 30;
  currentPage: number = 1;
  totalPages: number = 1;
  showloader=true;

  constructor(private service: ComicvineapiService, private route: Router) {
    this.vollist = [];
    this.filteredVolumes = [];
  }

  ngOnInit(): void {
    this.GetVolumes();
  }

  GetVolumes() {
    this.showloader=true
    this.service.getVolumes()
      .subscribe((result) => {
        this.vollist = result;
        this.showloader=false;
        this.filteredVolumes = result;
        this.updateFilteredVolumes();
        console.table(result);
      });
  }


  filterVolumes() {
    this.currentPage = 1;
    this.updateFilteredVolumes();
  }

  updateFilteredVolumes() {

    if (this.vollist) {
      const searchTerm = this.name?.toLowerCase() || '';
      this.filteredVolumes = this.vollist.filter(volume =>
        volume.name.toLowerCase().includes(searchTerm)
      );


      this.totalPages = Math.ceil((this.filteredVolumes.length || 1) / this.itemsPerPage);
    }
  }


  paginateVolumes(): Array<Volumes> {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredVolumes.slice(startIndex, endIndex);
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
