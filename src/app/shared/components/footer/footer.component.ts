import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public version: string; 
  public yearNow: string;

  constructor() { 
    this.version = "v1.1.0312.1";
    this.yearNow = new Date().getFullYear().toString();
  }

  ngOnInit() {
  }

}
