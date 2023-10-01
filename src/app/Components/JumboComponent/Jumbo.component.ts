import { Component } from '@angular/core';

@Component({
  selector: 'Jumbo',
  templateUrl: './Jumbo.component.html',
  styleUrls: ['./Jumbo.component.css'],
})
export class JumboComponent {
  public scroll(id: any) {
    let el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
