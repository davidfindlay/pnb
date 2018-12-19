import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  albums;

  constructor(private authService: AuthenticationService,
              private route: ActivatedRoute,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  isLoggedIn() {
    return this.authService.isAuthorized();
  }

}
