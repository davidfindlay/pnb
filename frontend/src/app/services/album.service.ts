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
    console.log('Album service getAlbumDetails');
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

    this.addFiles(album, files).subscribe((fileData) => {

      const addItem = item;

      addItem.file = fileData.id;
      addItem.type = 'image'; // Placeholder for future differentiation between videos and images
      addItem.album = album.id;

      console.log(addItem);

      this.http.post('/api/albums/' + album.id + '/add/', addItem, httpOptions)
        .subscribe((res) => {
          console.log(res);
        });

    });

  }

  addFiles(album, files) {

    console.log('Create Album File');

    if (!files || files.length === 0) {
      return throwError("Please select a file.");
    }

    const headers = new HttpHeaders().append("Accept", "application/json")
      .append("Content-Type", 'multipart/form-data');
    const formData: FormData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
      console.log(files[i].name + ' - ' + files[i])
    }

    return this.http.post('/api/albums/' + album.id + '/addfile/', formData)
      .pipe(
        tap( (res) => {
          console.log(res)
        })
      )

  }

  getItems(album) {
    console.log('Get items from album: ' + album.id);

    return this.http.get('/api/albums/' + album.id + '/items/');
  }

  getFile(fileId) {
    console.log('Get file' + fileId);

    return this.http.get('/api/files/' + fileId + '/');
  }

}
