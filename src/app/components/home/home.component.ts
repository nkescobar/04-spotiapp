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
    this.spotifyService.getNewReleases();

    this.homeService.getContriesLanguage().subscribe((resp: any) => {
      console.log('resp--------->', resp);
    });

    this.spotifyService.getNewReleases()
    .subscribe((data: any) => {
      this.newSounds = data.albums.items;
      console.log('TCL: HomeComponent -> ngOnInit -> this.newSounds', this.newSounds);
    });
  }

}
