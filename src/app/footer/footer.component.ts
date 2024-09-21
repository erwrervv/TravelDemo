import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router  ){

  }

  gotoArticlePost(){
    this.router.navigate(["/article-post"]).then(()=>{
      window.scrollTo(0,0);
    })
  }

  gotoArticleListPost(){
    this.router.navigate(["/article-list-post"]).then(()=>{
      window.scrollTo(0,0);
    })
  }
}
