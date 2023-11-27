import { Component, OnInit, Input } from '@angular/core';
import { ImgShare } from '../models/img-share.model';
import { ImgSharesService } from '../services/img-shares.service';

@Component({
  selector: 'app-img-share-list',
  templateUrl: './img-share-list.component.html',
  styleUrl: './img-share-list.component.scss'
})
export class ImgShareListComponent implements OnInit{

  @Input() SearchName!: string;

  imgShares: ImgShare[] = [];
  constructor(private imgSharesService : ImgSharesService) { 
    this.imgShares = this.imgSharesService.getAllImgShares();
  }

  ngOnInit(): void { }
}