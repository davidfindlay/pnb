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
import {ProtectedGuard} from 'ngx-auth';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [ProtectedGuard],
    children: [
      {path: 'newsfeed', component: NewsfeedComponent},
      {path: ':album-id', component: GalleryComponent},
      {path: ':album-id/blog', component: BlogPostViewComponent},
      {path: ':album-id/:item-id', component: ItemViewComponent}
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {path: '**', component: LoginComponent},
      {path: 'login', component: LoginComponent}
    ]
  }
];


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
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AlbumService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
