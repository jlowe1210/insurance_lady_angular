import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css'],
})
export class NavBarComponent {
  mobileToggle: boolean = false;

  public scroll(id: any) {
    let el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  public mobileNavToggle() {
    console.log('test');
    this.mobileToggle = !this.mobileToggle;
  }
}
