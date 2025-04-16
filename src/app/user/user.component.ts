import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // <!-- ** Pass data in child component
  // @Input() user: string = '';
  // <!-- ** Reuse components
  // @Input() user: string = '';
  // <!-- ** pass data child to parent component
  // @Output() getUsers = new EventEmitter();
  // users = ['Ajay', 'Goyal', 'Peter', 'Akshay', 'Kumar'];
  // 1st way
  // ngOnInit() {
  //   this.getUsers.emit(this.users);
  // }
  // 2nd way
  // loadData() {
  //   this.getUsers.emit(this.users);
  // }
  // Life cycle methods in angular
  // @Input() counter = 0;
  // name = 'Rahul';
  // constructor() {
  //   console.log('constructor');
  //   this.name = 'Sam';
  // }
  // ngOnInit() {
  //   console.log('ngOnInit');
  //   this.name = 'Ajay';
  // }
  // ngOnDestroy() {
  //   console.log('onDestroy');
  // }
  // ngOnChanges() {
  //   console.log('ngOnChanges');
  // }
}
