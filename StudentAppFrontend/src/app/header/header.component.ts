import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public links:string[]=['Add','Delete','Get','Update']
  constructor() { }

  ngOnInit(): void {
  }

}
