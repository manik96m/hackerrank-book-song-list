import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../../types/Item";

@Component({
  selector: "data-list",
  templateUrl: "./dataList.component.html",
  styleUrls: ["./dataList.component.scss"],
})
export class DataList implements OnInit {
  @Input() dataList: Item[];
  @Input() dataType: string;
  @Output() onItemDelete: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {}

  itemDeleteClick(itemName: string) {
    this.onItemDelete.emit(itemName);
  }
}
