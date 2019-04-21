import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "google-box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.css"]
})
export class BoxComponent implements OnInit {
  @Input()
  data: any;
  constructor() {}

  ngOnInit() {}
}
