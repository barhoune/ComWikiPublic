import { Component, Input, OnInit, inject,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicvineapiService } from '../../services/comicvineapi.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit{

  constructor(private service:ComicvineapiService,private router:ActivatedRoute) { }
  movie:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.getMovie(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
      console.log(result,'getmoviedetails#');
      this.movie = await result;
    });
  }
  showMore = false;
  initialLines = 205;
toggleShowMore() {
  this.showMore = !this.showMore;
}




}
