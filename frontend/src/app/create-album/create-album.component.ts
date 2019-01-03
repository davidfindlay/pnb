import { Component, OnInit } from '@angular/core';
import {Album} from '../models/album';
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {

  album: Album;

  constructor(private albumService: AlbumService) { this.album = new Album(); }

  ngOnInit() {
  }

  onSubmit() {
    this.albumService.createAlbum(this.album).subscribe((data) => {
        console.log('submitted new album');
        console.log(data);
      },
      (error) => {
        console.log('error submitting new album');
        console.log(error);
      }
    );
  }

}
