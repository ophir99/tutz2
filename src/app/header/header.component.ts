import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  // menu1 = "Why google?";
  // menu2 = "Solutions";
  // menu3 = "Products";
  imgUrl: string =
    "https://cloud.google.com/_static/1b4cdcc832/images/cloud/cloud-logo.svg";
  index: number;
  el;
  currentSection: string;
  showSection: boolean = false;
  myClass: string = "active";
  menu: any[] = [
    // "Why Google",
    // "Solutions",
    // "Products",
    // "Pricing",
    // "Getting Started"
    {
      name: "Why Google",
      selected: false
    },
    {
      name: "Solutions",
      selected: false
    },
    {
      name: "Products",
      selected: false
    },
    {
      name: "Getting started",
      selected: false
    }
  ];
  constructor() {}

  ngOnInit() {}

  respondToClick(item: any, ind: string) {
    item.selected = !item.selected;
    this.showSection = item.selected;
    debugger;
    this.currentSection = item.name;
  }
}
