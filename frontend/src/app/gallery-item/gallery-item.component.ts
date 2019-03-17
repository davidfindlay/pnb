import {Component, Input, OnInit} from '@angular/core';
import {FileService} from '../services/file.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() galleryItem;
  fileUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) { }

  ngOnInit() {
    this.getFileUrl();
  }

  getFileUrl() {
    this.albumService.getFile(this.galleryItem.file).subscribe((fileData) => {

      this.fileUrl = fileData.url;
      console.log("got url " + this.fileUrl)

    });
  }

}
