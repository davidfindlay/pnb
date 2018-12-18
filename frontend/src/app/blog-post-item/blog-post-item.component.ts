import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../services/file.service';

@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.scss']
})
export class BlogPostItemComponent implements OnInit {

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
