import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-full',
  templateUrl: './item-full.component.html',
  styleUrls: ['./item-full.component.css']
})
export class ItemFullComponent implements OnInit {
  
  @Input() fullitem: {};
  constructor() { }

  ngOnInit() {
  }


}
