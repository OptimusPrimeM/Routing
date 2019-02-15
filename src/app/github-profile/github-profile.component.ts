import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {


  constructor(private router: Router) { }


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
  



  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('id');
    console.log(userId);
  }

      */


  submit() {
    this.router.navigate(
      ['/followers'],
      {
        queryParams: {
          page: 1,
          order: "newest"
        }
      }
    );
  }
}
