import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) {
  }

  getAlbums() {
    console.log('Album service getAlbums()');

    return this.http.get('http://localhost:8000/api/albums');
  }

  getAlbumItem(albumId, itemId) {

    // const currentAlbum = this.albums.find(x => x.id === albumId);
    // console.log(currentAlbum.items);
    // const item = currentAlbum.items.find(x => x.id === parseInt(itemId));
    // console.log(item);
    //
    // return item;

  }

}
