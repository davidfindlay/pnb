import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Album} from '../models/album';
import {Subject} from 'rxjs';
import {share, tap} from 'rxjs/operators';
import {AlbumItem} from "../models/album-item";
import { Observable, throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'dataType': 'json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums: Album[];
  albumsUpdated: Subject<Album[]>;

  constructor(private http: HttpClient) {
    this.albumsUpdated = new Subject<Album[]>();
  }

  getAlbums() {
    console.log('Album service getAlbums()');
    this.http.get<Album[]>('/api/albums')
      .subscribe((res) => {
        this.albums = res;
        this.albumsUpdated.next(res);
      });
  }

  getAlbumDetails(albumId) {
    console.log('Album service getAlbumItems');
    return this.http.get<Album>('/api/albums/' + albumId);
  }

  getAlbumItem(albumId, itemId) {
    return this.http.get<AlbumItem>('/api/albums/' + albumId + '/' + itemId);
  }

  createAlbum(album) {
    console.log('Create album');
    console.log(album);

    return this.http.post<Album>('/api/albums/', album, httpOptions)
      .pipe(
        tap(() => {
          this.getAlbums();
          console.log('tap');
        })
      );

  }

  addItem(album, item, files) {

    console.log('Create Album Item');

    if (!files || files.length === 0) {
      return throwError("Please select a file.");
    }

    const headers = new HttpHeaders().append("Accept", "application/json")
      .append("Content-Type", 'multipart/form-data');
    const formData: FormData = new FormData();

    formData.append('data', new Blob([JSON.stringify(item)],
        {
            type: "application/json"
        }));

    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i]);
      console.log(files[i].name + ' - ' + files[i])
    }

    return this.http.post('/api/albums/' + album.id + '/add/', formData, {headers})
      .pipe(
        tap( (res) => {
          console.log(res)
        })
      )

  }

}
