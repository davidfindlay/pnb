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
    const albumId = this.route.snapshot.paramMap.get('album-id');

    this.albumService.getAlbumDetails(albumId).subscribe( (data: Album) => {

      this.albumId = data.id;
      this.albumTitle = data.title;
      this.albumDescription = data.description;

      this.galleryItems = data.items;
      console.log(this.galleryItems);
    });
  }

  blogView() {
    this.router.navigate(['blog'], {relativeTo: this.route});
  }

}
