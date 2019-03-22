import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit {
  token: string;
  constructor(private http: HttpClient ) {
    console.log('Ready spotify');
    this.token = 'Bearer BQCl2mFXh0OUMhay2AzLTF8EbRthqL_dURUORkduJWaDk-oeK2YWSU-O_oPOZ1CsLSsx4bOp1RAfgOlkgt0';

   }

   ngOnInit(): void {
  }

   getNewReleases() {
     const headers = new HttpHeaders({
       Authorization: this.token
     });
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
       .pipe( map( (data: any) => {
              return data.albums.items;
         })
      );
   }

   getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe( map( (data: any) => {
          return data.artists.items;
        }
      ));
   }
}
