import { Component, OnInit, Input } from '@angular/core';
import { ImgShare } from '../models/img-share.model';
import { ImgSharesService } from '../services/img-shares.service';

@Component({
  selector: 'app-img-share',
  templateUrl: './img-share.component.html',
  styleUrl: './img-share.component.scss'
})
export class ImgShareComponent implements OnInit{
  @Input() imgShare!: ImgShare;

  buttonText: string = "Like";

  constructor(private imgSharesService: ImgSharesService) {

  }

  ngOnInit() { }

  onAddImage() {
    if (this.buttonText === 'Like') {
      this.imgSharesService.shareImgShareById(this.imgShare.id, 'like');
      this.buttonText = 'Unlike';
    } else {
      this.imgSharesService.shareImgShareById(this.imgShare.id, 'unlike');
      this.buttonText = 'Like';
    }
  }
}
