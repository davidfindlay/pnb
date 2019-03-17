import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlbumItem} from "../models/album-item";
import {AlbumService} from "../services/album.service";
import {Album} from "../models/album";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gallery-item-add',
  templateUrl: './gallery-item-add.component.html',
  styleUrls: ['./gallery-item-add.component.scss']
})
export class GalleryItemAddComponent implements OnInit {

  @ViewChild("inputFile") inputFile: ElementRef | null = null;
  albumItem: AlbumItem;
  album: Album;

  constructor(private albumService: AlbumService,
              private route: ActivatedRoute) {
    this.albumItem = new AlbumItem();
    this.album = new Album();
  }

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('album-id');
    this.albumService.getAlbumDetails(albumId).subscribe(
      (album) => {
        this.album = album;
      }
    )
  }


  onSubmit() {
    console.log('GalleryItemAddComponent onSubmit');

    const fileInput: HTMLInputElement = this.inputFile.nativeElement;

    this.albumService.addItem(this.album, this.albumItem, fileInput.files)
      .subscribe((res) => {
        console.log(res);
      });

  }

}
