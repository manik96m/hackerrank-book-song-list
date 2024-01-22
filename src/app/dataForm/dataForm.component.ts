import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Item } from "../../types/Item";

@Component({
  selector: "data-form",
  templateUrl: "./dataForm.component.html",
  styleUrls: ["./dataForm.component.scss"],
})
export class DataForm implements OnInit {
  formData: Item = this.getDefaultFormValue();

  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  ngOnInit() {}

  getDefaultFormValue(): Item {
    return {
      name: "",
      genre: "",
      creator: "",
      type: "",
      totalTime: 0,
    };
  }

  updateFormData(event, field) {
    this.formData = {
      ...this.formData,
      [field]: event.target.value,
    };
  }

  itemAddClick() {
    this.onItemAdded.emit(this.formData);
    this.formData = this.getDefaultFormValue();
  }
}
