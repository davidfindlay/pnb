import {Component, Input, OnInit} from '@angular/core';
import {FileService} from '../services/file.service';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumItem} from "../models/album-item";

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  item: AlbumItem;
  filename: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService,
              private fileService: FileService) { }

  ngOnInit() {

    const albumId = this.route.snapshot.paramMap.get('album-id');
    const itemId = this.route.snapshot.paramMap.get('item-id');

    console.log('Item view ' + albumId + ' - ' + itemId);

    this.albumService.getAlbumItem(itemId);

  }

  // Navigation functions
  previous() {
    console.log('Previous');
  }

  album() {
    console.log('Album');
  }

  next() {
    console.log('Next');
  }

}
