import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  email: string = '';
  password: string = '';
  formdata: any;
  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl('Tutorialspoint'),
      password: new FormControl('admin@123'),
    });
  }
  onClickSubmit(data: any) {
    this.email = data.email;
    this.password = data.password;
  }
}
