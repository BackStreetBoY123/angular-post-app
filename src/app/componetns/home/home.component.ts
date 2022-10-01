import { Component, OnInit } from '@angular/core';
import { IName } from '../home/IName';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  details: IName[] = [
    { name: 'suraj', sirname: 'yadav', email: 'sy423719@gmail.com' },
    { name: 'manish', sirname: 'panday', email: 'sy423719@gmail.com' },
    { name: 'rohit', sirname: 'burnol', email: 'sy423719@gmail.com' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
