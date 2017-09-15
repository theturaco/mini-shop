<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable()
export class ProductService {
  getAll = (): Promise<Product[]> => {
    return Promise.resolve([
      new Product(1, 'Lit', 'Bultex', 800),
      new Product(1, 'Chaise', 'Bois', 49)
    ]);
=======
import {Injectable} from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {

  getAll = (): Promise<Product[]> => {
    return Promise.resolve([
        new Product(1, 'Aspirateur', 'Dyon', 600),
        new Product(2, 'Vélo', 'VTT jaune top max', 300)
      ]);
>>>>>>> 620a440e5eb3299fba0c090027e3754aeaf4a256
  }
}
