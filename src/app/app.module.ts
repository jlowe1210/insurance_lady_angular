import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/NavBarComponent/NavBar.component';
import { ContainerComponent } from './Components/ContainerComponent/Container.component';
import { JumboComponent } from './Components/JumboComponent/Jumbo.component';
import { AboutSectionComponent } from './Components/AboutSectionComponent/AboutSection.component';
import { OurServiceComponent } from './Components/OurService/OurService.component';
import { BookAppointmentComponent } from './Components/ConsultationsComponent/Consultations.component';
import { ContactComponent } from './Components/ContactComponent/Contact.component';
import { MapComponent } from './Components/MapComponent/Map.component';
import { FooterComponent } from './Components/FooterComponent/Footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContainerComponent,
    JumboComponent,
    AboutSectionComponent,
    OurServiceComponent,
    BookAppointmentComponent,
    ContactComponent,
    MapComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
