import { Component, OnInit, Input } from '@angular/core';
import { IAlbum } from '../Iitems';
import { IArtist } from '../Iitems';
import { ITrack } from '../Iitems';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent implements OnInit {
  @Input() item: {};


  constructor() { }

  ngOnInit() {
  
  }

}
