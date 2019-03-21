import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(termino: string) {
    console.log('TCL: SearchComponent -> search -> termino', termino);
    this.spotifyService.getArtist(termino)
      .subscribe((data: any) => {
        console.log('TCL: SearchComponent -> search -> data', data);
       // this.artists = data.artist.items;
      });
  }

}
