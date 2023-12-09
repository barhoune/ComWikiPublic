import { Component, OnInit } from '@angular/core';
import { ComicvineapiService } from '../../services/comicvineapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volume-detail',
  templateUrl: './volume-detail.component.html',
  styleUrls: ['./volume-detail.component.css']
})
export class VolumeDetailComponent implements OnInit{

  constructor(private service:ComicvineapiService,private router:ActivatedRoute) { }
  volume:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.getVolume(getParamId);
  }

  getVolume(id:any){
    this.service.getVolumeDetails(id).subscribe(async(result)=>{
      console.log(result,'getmoviedetails#');
      this.volume = await result;
    });
  }
}
