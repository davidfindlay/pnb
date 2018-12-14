import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AlbumService} from './services/album.service';
import {FileService} from './services/file.service';
import { ItemViewComponent } from './item-view/item-view.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

const routes: Routes = [
  { path: '', component: NewsfeedComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: ':album-id', component: GalleryComponent },
  { path: ':album-id/:item-id', component: ItemViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    GalleryComponent,
    GalleryItemComponent,
    ItemViewComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AlbumService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
