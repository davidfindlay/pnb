import { Component, OnInit } from '@angular/core';
import {Album} from '../models/album';
import {AlbumService} from '../services/album.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {

  album: Album;

  constructor(private albumService: AlbumService,
              private router: Router) {
    this.album = new Album();
  }

  ngOnInit() {
    // Initialise an empty array of album items
    this.album.items = [];
  }

  onSubmit() {
    const albumCreated = this.albumService.createAlbum(this.album).subscribe((newAlbum: Album) => {
        console.log('submitted new album');
        this.router.navigate(['/albums', newAlbum.id]);
      },
      (error) => {
        console.log('error submitting new album');
        console.log(error);
      }
    );
  }

}
