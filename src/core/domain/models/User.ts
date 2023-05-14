import { v4 as uuidv4 } from 'uuid';
import { DTO } from '../types/DTO';

class User {
  private _id?: string;
  private _email?: string;
  private _password?: string;

  constructor() {
    this._id = uuidv4();
    this._email = '';
    this._password = '';
  }

  static fromJSON(json: DTO): User {
    const user = new User();

    if (json['id']) {
      user._id = String(json['id']);
    } else {
      user._id = uuidv4();
    }

    user._email = String(json['email']);
    user._password = String(json['password']);

    return user;
  }

  toJSON(): DTO {
    const json: DTO = {};
    json['id'] = this._id;
    json['email'] = this._email;
    json['password'] = this._password;
    return json;
  }

  get id() {
    return this._id;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}

export default User;
