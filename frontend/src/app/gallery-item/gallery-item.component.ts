import {Component, Input, OnInit} from '@angular/core';
import {FileService} from '../services/file.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() galleryItem;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fileService: FileService) { }

  ngOnInit() { }

  getFileUrl(id: Number) {
    const fileDetails = this.fileService.getFile(id);
    if (fileDetails !== undefined) {
      return fileDetails.filename;
    } else {
      return '';
    }
  }

}
