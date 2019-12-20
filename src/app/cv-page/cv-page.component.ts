import { Component, OnInit } from '@angular/core';
declare var xepOnline: any;
@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css']
})
export class CvPageComponent implements OnInit {
cvdata: any;
  constructor() { }

  ngOnInit() {
    this.cvdata = JSON.parse(localStorage.getItem('cvdata'));
    console.log(this.cvdata);
  }
  downloadpdf() {
    return xepOnline.Formatter.Format('instaFade', {render: 'download'});
  }

}
