import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { AboutSectionComponent } from './Components/AboutSectionComponent/AboutSection.component';
import { OurServiceComponent } from './Components/OurService/OurService.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'insuranceLady_angular';
}
