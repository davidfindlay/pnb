import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  albums;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}
