import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) {
  }

  getAlbums() {
    console.log('Album service getAlbums()');
    return this.http.get<Album[]>('http://localhost:8000/api/albums');
  }

  getAlbumDetails(albumId) {
    console.log('Album service getAlbumItems');
    return this.http.get<Album>('http://localhost:8000/api/albums/' + albumId);
  }

  getAlbumItem(albumId, itemId) {
    return null;
  }
}
