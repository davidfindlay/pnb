import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.scss']
})
export class BlogPostViewComponent implements OnInit {

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
