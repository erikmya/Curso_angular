import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tittle = 'erik-blog';
  name = 'Erik';
  age = 28;
  img = 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png';
  btnDisabled = true;
  person = {
    name: 'Erik',
    age: 23,
    avatar: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png'
  }
  names: string[] = ['Erik', 'Juan', 'Isaac'];
  newName = '';


  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  ageIncrease() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
