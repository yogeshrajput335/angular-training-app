import { Component, Input } from "@angular/core";

@Component({
  selector:'my-body',
  templateUrl:"./my-body.component.html"
})
export class MyBodyComponent {
  @Input() inputData: any = "Body default";
  newData=""
  addItem(newItem: string) {
    this.newData = newItem;
  }
}
