import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLayoutComponent} from './layouts/home-layout/home-layout.component';
import {ProtectedGuard, PublicGuard} from 'ngx-auth';
import {NewsfeedComponent} from './newsfeed/newsfeed.component';
import {GalleryComponent} from './gallery/gallery.component';
import {BlogPostViewComponent} from './blog-post-view/blog-post-view.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {LoginComponent} from './login/login.component';
import {CreateAlbumComponent} from './create-album/create-album.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [ProtectedGuard],
    children: [
      {path: 'newsfeed', component: NewsfeedComponent},
      {path: 'albums/new', component: CreateAlbumComponent},
      {path: 'albums/:album-id', component: GalleryComponent},
      {path: 'albums/:album-id/blog', component: BlogPostViewComponent},
      {path: 'albums/:album-id/:item-id', component: ItemViewComponent},
      // {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    canActivate: [ PublicGuard ],
    children: [
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
