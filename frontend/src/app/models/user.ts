import {Profile} from './profile';

export class User {
  public id: number;
  public username: string;
  public password: string;
  public confirmpassword: string;
  public first_name: string = '';
  public last_name: string = '';
  public email: string;
  public remember: boolean;
  public profile: Profile;
}
