import {Component, Input, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {FileService} from '../services/file.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Album} from '../models/album';
import {AlbumItem} from '../models/album-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  albumId: string;
  albumTitle: string;
  albumDescription: string;

  galleryItems: AlbumItem[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.paramMap.get('album-id');
    this.getAlbum();

    this.route.params.subscribe((params) => {
      this.albumId = params['album-id'];
      this.getAlbum();
    });
  }

  getAlbum() {
    this.albumService.getAlbumDetails(this.albumId).subscribe( (data: Album) => {
      this.loadAlbum(data);
    });
  }

  loadAlbum(data: Album) {
    this.albumId = data.id;
    this.albumTitle = data.title;
    this.albumDescription = data.description;

    this.albumService.getItems(data).subscribe((items: AlbumItem[]) => {
      this.galleryItems = items;
      console.log(this.galleryItems);
    });

  }

  blogView() {
    this.router.navigate(['blog'], {relativeTo: this.route});
  }

}
