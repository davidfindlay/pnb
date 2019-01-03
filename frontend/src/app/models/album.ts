import {AlbumItem} from './album-item';

export class Album {
  public id: string;
  public title: string;
  public album_stub: string;
  public description: string;
  public items: AlbumItem[];
}
