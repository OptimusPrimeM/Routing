import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }


  /*
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let profileId = +params.get('id');
        console.log(profileId);
      });
  }


  
    ngOnInit(): void {
      console.log("In the ngOnInit()");
    }
  
    */


  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('id');
    console.log(userId);
  }
}
