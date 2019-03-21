import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit {
  token: string;
  constructor(private http: HttpClient ) {
    console.log('Ready spotify');
   }

   ngOnInit(): void {
    this.token = 'Bearer BQDUkZW2FP1KBcNEoYdcOdTpj_gT_Xjf4wHaQ4qy9sptuYuEwRFfT-8gJR255CNaDfO1Vo-f8OdKLmEvZUY';
  }

   getNewReleases() {
     const headers = new HttpHeaders({
       Authorization: this.token
     });
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
   }
}
