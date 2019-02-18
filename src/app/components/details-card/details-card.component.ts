import { Component, OnInit } from '@angular/core';
import { DatatransferService  } from "../../service/datatransfer.service";
import { Input } from "@angular/core";
@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {
  @Input() data: any;
    @Input() isListCard: boolean;


  constructor(public dtsService:DatatransferService) { }

  ngOnInit() {
  }

}
