import { Component, OnInit } from '@angular/core';
import { ComicvineapiService } from '../../services/comicvineapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit{

  constructor(private service:ComicvineapiService,private router:ActivatedRoute) { }
  issue:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.getIssue(getParamId);
  }

  getIssue(id:any){
    this.service.getIssueDetails(id).subscribe(async(result)=>{
      console.log(result,'getissuedetails#');
      this.issue = await result;
    });
  }

}
