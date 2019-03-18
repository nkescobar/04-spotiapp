import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getContriesLanguage().subscribe((resp: any) => {
      console.log('resp--------->', resp);
    });
  }

}
