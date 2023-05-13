import { v4 as uuidv4 } from 'uuid';
import { DTO } from '../types/DTO';

class Product {
  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _price?: number;
  private _quantity?: number;

  constructor() {
    this._id = uuidv4();
    this._name = '';
    this._description = '';
    this._price = this._quantity = 0;
  }

  static fromJSON(json: DTO): Product {
    const product = new Product();

    if (json['id']) {
      product._id = String(json['id']);
    } else {
      product._id = uuidv4();
    }

    product._name = String(json['name']);
    product._description = String(json['description']);
    product._price = Number(json['price']);
    product._quantity = Number(json['quantity']);
    return product;
  }

  toJSON(): DTO {
    const json: DTO = {};
    json['id'] = this._id;
    json['name'] = this._name;
    json['description'] = this._description;
    json['price'] = this._price;
    json['quantity'] = this._quantity;
    return json;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }
}

export { Product };
