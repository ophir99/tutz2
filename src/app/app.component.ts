import { Component } from "@angular/core";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "google-cloud";
  menuArray: string[] = [
    "Continuous Integration",
    "Continuous Deliver",
    "Artificial Intelligence"
  ];
  data = [];

  constructor(public appService: AppService, private fdfdfdfdf: AppService) {
    this.data = this.appService.giveData("Bye");
    console.log(this.fdfdfdfdf.giveData("Hi"));
  }
}
