import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header-two",
  templateUrl: "./header-two.component.html",
  styleUrls: ["./header-two.component.css"]
})
export class HeaderTwoComponent implements OnInit {
  menu: string[] = ["Contact Sales", "Get Started for free", "Pricing"];

  @Input()
  receiver;

  @Input()
  x;
  constructor() {}

  ngOnInit() {}
}
