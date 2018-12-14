import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../services/album.service';
import {FileService} from '../services/file.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  albums;
  albumTitle: string;
  albumDescription: string;

  galleryItems = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
    console.log(this.albums);

    const albumId = this.route.snapshot.paramMap.get('album-id');

    const currentAlbum = this.albums.find(x => x.id === albumId);
    console.log(currentAlbum);

    this.albumTitle = currentAlbum.title;
    this.albumDescription = currentAlbum.description;
    this.galleryItems = currentAlbum.items;

  }

}
