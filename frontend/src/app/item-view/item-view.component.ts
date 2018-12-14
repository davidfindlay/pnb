import {Component, Input, OnInit} from '@angular/core';
import {FileService} from '../services/file.service';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  item;
  filename: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService,
              private fileService: FileService) { }

  ngOnInit() {

    const albumId = this.route.snapshot.paramMap.get('album-id');
    const itemId = this.route.snapshot.paramMap.get('item-id');

    console.log('Item view ' + albumId + ' - ' + itemId);

    this.item = this.albumService.getAlbumItem(albumId, itemId);
    console.log(this.item);

    if (this.item !== null && this.item !== undefined) {
      const fileDetails = this.fileService.getFile(this.item.file);
      this.filename = fileDetails.filename;
    }

  }

  getFileUrl(id: Number) {
    const fileDetails = this.fileService.getFile(id);
    if (fileDetails !== undefined) {
      return fileDetails.filename;
    } else {
      return '';
    }
  }

}
