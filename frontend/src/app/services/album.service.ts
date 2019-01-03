import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Album} from '../models/album';

const httpOptions = {
  headers: new HttpHeaders({
    'dataType': 'json',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) {
  }

  getAlbums() {
    console.log('Album service getAlbums()');
    return this.http.get<Album[]>('/api/albums');
  }

  getAlbumDetails(albumId) {
    console.log('Album service getAlbumItems');
    return this.http.get<Album>('/api/albums/' + albumId);
  }

  getAlbumItem(albumId, itemId) {
    return null;
  }

  createAlbum(album) {
    console.log('Create album');
    console.log(album);
    return this.http.post<Album>('/api/albums/', {album}, httpOptions);
  }
}
