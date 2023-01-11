import { Component, Input } from "@angular/core";

@Component({
  selector:'my-body',
  templateUrl:"./my-body.component.html",
  styleUrls: ['./my-body.component.scss']
})
export class MyBodyComponent {
  i=2
  listDetail = [1,2,3,4,5,6]
  @Input() inputData: any = "Body default";
  newData=""
  addItem(newItem: string) {
    this.newData = newItem;
  }
}
