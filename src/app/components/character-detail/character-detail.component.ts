import { Component,  OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicvineapiService } from '../../services/comicvineapi.service';



@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CharacterDetailComponent implements OnInit{

  constructor(private service:ComicvineapiService,private router:ActivatedRoute) { }
  character:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.getCharacter(getParamId);
  }

  getCharacter(id:any){
    this.service.getCharacterDetails(id).subscribe(async(result)=>{
      console.log(result,'charsdetails#');
      this.character = await result;
    });
  }

}
