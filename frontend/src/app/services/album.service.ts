import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums = [{
    id: 'test-album',
    title: 'Test Album',
    description: 'This is our test album',
    items: [{
        id: 1,
        type: 'image',
        file: 1,
        title: 'Test Photo 1',
        description: 'This is a test item number 1'
      },
      {
        id: 2,
        type: 'image',
        file: 2,
        title: 'Test Photo 2',
        description: 'This is a test item number 2'
      },
      {
        id: 3,
        type: 'image',
        file: 3,
        title: 'Test Photo 3',
        description: 'This is a test item number 3'
      },
      {
        id: 4,
        type: 'image',
        file: 4
      },
      {
        id: 5,
        type: 'image',
        file: 5
      },
      {
        id: 6,
        type: 'image',
        file: 6
      },
      {
        id: 7,
        type: 'image',
        file: 7
      },
      {
        id: 8,
        type: 'image',
        file: 8
      },
      {
        id: 9,
        type: 'image',
        file: 9
      },
      {
        id: 10,
        type: 'image',
        file: 10
      },
      {
        id: 11,
        type: 'image',
        file: 11
      },
      {
        id: 12,
        type: 'image',
        file: 12
      }
    ]
  }];

  constructor() {
  }

  getAlbums() {
    console.log('Album service getAlbums()');
    return this.albums;
  }

  getAlbumItem(albumId, itemId) {

    const currentAlbum = this.albums.find(x => x.id === albumId);
    console.log(currentAlbum.items);
    const item = currentAlbum.items.find(x => x.id === parseInt(itemId));
    console.log(item);

    return item;

  }

}
