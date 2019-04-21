import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderTwoComponent } from "./header-two/header-two.component";
import { BoxComponent } from "./box/box.component";
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTwoComponent,
    BoxComponent
  ],
  imports: [BrowserModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
