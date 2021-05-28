import { AuthInfoService } from './../../../services/auth-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName!: string;

  constructor(private authInfoService: AuthInfoService) {}

  ngOnInit(): void {
    this.userName = this.authInfoService.getDecodedToken().name;
  }
}
