import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GalleryItemComponent} from './gallery-item/gallery-item.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AlbumService} from './services/album.service';
import {FileService} from './services/file.service';
import {ItemViewComponent} from './item-view/item-view.component';
import {NewsfeedComponent} from './newsfeed/newsfeed.component';
import {BlogPostViewComponent} from './blog-post-view/blog-post-view.component';
import {BlogPostItemComponent} from './blog-post-item/blog-post-item.component';
import {NewsfeedItemComponent} from './newsfeed-item/newsfeed-item.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {LoginComponent} from './login/login.component';
import {HomeLayoutComponent} from './layouts/home-layout/home-layout.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {FormsModule} from '@angular/forms';
import { CreateAlbumComponent } from './create-album/create-album.component';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    GalleryComponent,
    GalleryItemComponent,
    ItemViewComponent,
    NewsfeedComponent,
    BlogPostViewComponent,
    BlogPostItemComponent,
    NewsfeedItemComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    CreateAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthenticationModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [
    AlbumService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
