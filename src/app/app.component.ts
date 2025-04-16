import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  afterRender,
  Component,
  computed,
  effect,
  Signal,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CurrencyConvertorPipe } from './pipe/currency-convertor.pipe';
import { ProductsService } from './service/products.service';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  // imports: [ReactiveFormsModule, NgIf],.
  // imports: [FormsModule, NgIf],
  // imports: [UserComponent, NgIf],
  // imports: [CommonModule],.
  // imports: [CurrencyConvertorPipe],
  // imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // name = '';
  // displayName = '';
  // getName(event: Event) {
  //   this.name = (event.target as HTMLInputElement).value;
  // }
  // showName() {
  //   this.displayName = this.name;
  // }
  // setName() {
  //   this.name = 'Sam';
  // }
  // email = '';
  // getEmail(val: string) {
  //   console.log(val);
  //   this.email = val;
  // }
  // setEmail() {
  //   this.email = 'default@gmail.com';
  // }
  // <!-- ** For signals
  // count = signal(10);
  // x = 20;
  // constructor() {
  //   effect(() => {
  //     console.log(this.count());
  //   });
  // }
  // updateValue() {
  //   this.count.set(this.count() + 1);
  // }
  // incDecValue(val: number) {
  //   this.count.set(this.count() + val);
  // }
  // <!-- ** Types of signals
  // data: WritableSignal<number | string> = signal(10); // Iski value change kr skte h
  // updateSignal() {
  //   this.data.set('Hello');
  // Agr iske pass sirf number value h to ye perfect kaam krega lekin agr
  // iske pass string value h to ye shi se kaam nhi krega isliye update method jitna ho ske utna km use krna chaiye
  // this.data.update((val)=>val+1)
  // }
  // count: Signal<number> = computed(() => 20); // It can't be change it can readable
  // Computed signals
  // x = signal(10);
  // y = signal(20);
  // z = computed(() => this.x() + this.y());
  // updateVal() {
  //   console.log(this.z());
  //   this.x.set(100);
  //   console.log(this.z());
  // }
  // <!-- ** Effect use in angular
  // count = signal(0);
  // displayHeading = true;
  // constructor() {
  //   effect(() => {
  //     if (this.count() == 2) {
  //       this.displayHeading = true;
  //       setTimeout(() => {
  //         this.displayHeading = false;
  //       }, 2000);
  //     } else {
  //       this.displayHeading = false;
  //     }
  //   });
  // }
  // toggleVal() {
  //   this.count.set(this.count() + 1);
  // }
  // <!-- ** For loop contextual variables
  // users = [
  //   'ajay',
  //   'goyal',
  //   'naanu',
  //   'agwaral',
  //   'garg',
  //   'jindal',
  //   'khandelwal',
  //   'kambalwal',
  //   'rao',
  //   'sahab',
  // ];
  // applicants = [];
  // Two way binding
  // name = '';
  // Without two way binding
  // name = '';
  // changeName(event: Event) {
  //   const val = (event.target as HTMLInputElement).value;
  //   this.name = val;
  // }
  // <!-- ** To do list
  // task = '';
  // taskList: { id: number; task: string }[] = [];
  // addTask() {
  //   this.taskList.push({ id: this.taskList.length + 1, task: this.task });
  //   this.task = '';
  //   console.log(this.taskList);
  // }
  // deleteTask(taskId: number) {
  //   this.taskList = this.taskList.filter((item) => item.id != taskId);
  // }
  // ngFor
  // users = ['ser', 'ste', 'grt', 'gas', 'awe'];
  // login = false;
  // name = new FormControl('');
  // <!-- ** form grouping
  // profileForm = new FormGroup({
  //   name: new FormControl(),
  //   password: new FormControl(),
  //   email: new FormControl(),
  // });
  // userName = '';
  // email = '';
  // onSubmit() {
  //   console.log('onSubmit Called');
  //   console.log(this.profileForm.value);
  //   this.userName = this.profileForm.value.name;
  //   this.email = this.profileForm.value.email;
  // }
  // setValue() {
  //   this.profileForm.setValue({
  //     name: 'Peter',
  //     password: '321',
  //     email: 'peter@gmial.com',
  //   });
  // }
  // <!-- ** Reactive form validation
  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(5),
  //   ]),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.maxLength(30),
  //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  //   ]),
  // });
  // onSubmit() {
  //   console.log(this.profileForm.value);
  // }
  // // getter method in reactive form validation
  // get name() {
  //   return this.profileForm.get('name');
  // }
  // get email() {
  //   return this.profileForm.get('email');
  // }
  // get password() {
  //   return this.profileForm.get('password');
  // }
  // <!-- **  Template driven form
  // userDetails: any;
  // addDetails(val: NgForm) {
  //   console.log(val);
  //   this.userDetails = val;
  // }
  // <!-- ** Pass data in child component
  // userName = '';
  // onUserChange(user: string) {
  //   this.userName = user;
  // }
  // <!-- ** Reuse components
  // users = ['Ajay', 'Goyal', 'Tony', 'Kakkar', 'Harsh'];
  // <!-- ** pass data child to parent component
  // users: undefined | string[];
  // handleUsers(users: string[]) {
  //   console.log(users);
  //   this.users = users;
  // }
  // <!-- ** pipes
  // title = 'code step by step';
  // date = new Date();
  // amount = 10;
  // <!-- ** Make custom pipes
  // amount = 10;
  // <!-- ** Life cycle method in angular
  // @ViewChild('user') UserComponent: any;
  // counter = 0;
  // constructor() {
  //   afterRender(() => {
  //     console.log('render', this.UserComponent.counter);
  //   });
  // }
  // updateCounter() {
  //   this.counter++;
  // }
  // <!-- ** service
  // productData:
  //   | {
  //       name: string;
  //       brand: string;
  //       price: string;
  //     }[]
  //   | undefined;
  // constructor(private productService: ProductsService) {}
  // getProductData() {
  //   this.productData = this.productService.getProductData();
  //   console.log(this.productData);
  // }
  // <!-- ** API Call
  // productList: any;
  // constructor(private productService: ProductsService) {}
  // ngOnInit() {
  //   this.productService.getProductData().subscribe((data: any) => {
  //     console.log(data);
  //     this.productList = data.products;
  //   });
  // }
  // <!-- **  Integrate Json server API
  constructor(private userService: UsersService) {}
  productList: User[] = [];
  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.productList = data;
    });
  }
  // <!-- ** API Call service/Post API
  // constructor(private userService: UsersService) {}
  // productList: User[] = [];
  // ngOnInit() {
  //   this.getUser();
  // }
  // getUser() {
  //   this.userService.getUsers().subscribe((data: User[]) => {
  //     console.log(data);
  //     this.productList = data;
  //   });
  // }
  // addUser(user: User) {
  //   console.log(user);
  //   this.userService.saveUsers(user).subscribe((data: User) => {
  //     console.log(data);
  //     if (data) {
  //       this.getUser();
  //     }
  //   });
  // }
  // <!-- ** Delete API method in angular
  // constructor(private userService: UsersService) {}
  // productList: User[] = [];
  // ngOnInit() {
  //   this.getUser();
  // }
  // getUser() {
  //   this.userService.getUsers().subscribe((data: User[]) => {
  //     console.log(data);
  //     this.productList = data;
  //   });
  // }
  // addUser(user: User) {
  //   console.log(user);
  //   this.userService.saveUsers(user).subscribe((data: User) => {
  //     // console.log(data);
  //     if (data) {
  //       this.getUser();
  //     }
  //   });
  // }
  // deleteUser(id: string) {
  //   // console.log(id);
  //   this.userService.deleteUser(id).subscribe((data: User) => {
  //     if (data) {
  //       this.getUser();
  //     }
  //   });
  // }
  // <!-- ** Populate data in input fields with API
  // constructor(private userService: UsersService) {}
  // productList: User[] = [];
  // selectedUser: User | undefined;
  // ngOnInit() {
  //   this.getUser();
  // }
  // getUser() {
  //   this.userService.getUsers().subscribe((data: User[]) => {
  //     console.log(data);
  //     this.productList = data;
  //   });
  // }
  // addUser(user: User) {
  //   if (!this.selectedUser) {
  //     this.userService.saveUsers(user).subscribe((data: User) => {
  //       // console.log(data);
  //       if (data) {
  //         this.getUser();
  //       }
  //     });
  //   } else {
  //     const userData = { ...user, id: this.selectedUser.id };
  //     this.userService.updateUser(userData).subscribe((data) => {
  //       if (data) {
  //         this.getUser();
  //       }
  //     });
  //   }
  // }
  // deleteUser(id: string) {
  //   // console.log(id);
  //   this.userService.deleteUser(id).subscribe((data: User) => {
  //     if (data) {
  //       this.getUser();
  //     }
  //   });
  // }
  // updateUser(id: string) {
  //   // console.log(id);
  //   this.userService.getUpdatedUser(id).subscribe((data: User) => {
  //     this.selectedUser = data;
  //   });
  // }
}
