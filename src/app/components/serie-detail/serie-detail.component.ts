import { Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicvineapiService } from '../../services/comicvineapi.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css'],
})
export class SerieDetailComponent implements OnInit{

  constructor(private service:ComicvineapiService,private router:ActivatedRoute) { }
  serie:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.getSerie(getParamId);

  }

  getSerie(id:any){
    this.service.getSerieDetails(id).subscribe(async(result)=>{
      console.log(result,'getseriedetails#');
      this.serie = await result;
    });
  }

}
