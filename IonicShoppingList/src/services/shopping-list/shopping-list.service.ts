import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";

import { Item } from '../../models/item/item.interface';

@Injectable()

export class ShoppingListService {

  private shoppingListRef = this.db.list<Item>('shopping-list');

  constructor ( private db: AngularFireDatabase) {

  }

  getShoppingList() {
    return this.shoppingListRef;
  }

  addItem(item: Item) {
    return this.shoppingListRef.push(item);
  }

  editItem(item: Item) {
    return this.shoppingListRef.update(item.key, item);
  }

  removeItem(item: Item) {
    return this.shoppingListRef.remove(item.key);
  }
}
