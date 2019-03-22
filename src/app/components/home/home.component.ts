import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSounds: any[] = [];
  constructor(private homeService: HomeService, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getNewReleases()
    .subscribe( (data: any) => {
      this.newSounds = data;

      console.log('TCL: HomeComponent -> ngOnInit -> resp', data);
    },
    error => {
      console.error('error -->', error);
    });
  }

}
