import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute, Router} from '@angular/router';
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
              private router: Router,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.albumService.getAlbums();
    this.albumService.albumsUpdated.subscribe(
      (data) => {
        console.log(data);
        this.albums = data;
      }
    );
  }

  isLoggedIn() {
    return this.authService.isAuthorized();
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/', 'login']);
  }

}
