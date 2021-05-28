import { IUser } from 'src/app/interfaces/user-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  @Input() users!: IUser[]

  constructor() { }

  ngOnInit(): void {
  }

}
