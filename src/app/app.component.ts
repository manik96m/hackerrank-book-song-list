import { Component } from "@angular/core";
import { Item } from "../types/Item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  Book: string = "Book";
  Song: string = "Song";

  books = {};
  songs = {};
  Object = Object;

  constructor() {}

  ngOnInit() {}

  onItemAdded(item) {
    if (item.type === "Book") {
      this.books = {
        ...this.books,
        [item.name]: item,
      };
    } else {
      this.songs = {
        ...this.songs,
        [item.name]: item,
      };
    }
  }

  onItemDelete(name, type) {
    let newItemList;

    if (type === "Book") {
      newItemList = { ...this.books };
      delete newItemList[name];
      this.books = newItemList;
    } else {
      newItemList = { ...this.songs };
      delete newItemList[name];
      this.songs = newItemList;
    }
  }
}
