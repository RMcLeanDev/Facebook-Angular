import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { AppService } from '../../app.service';
import { ImageViewComponent } from '../image-view/image-view.component';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {
  @Output() selectedImage = new EventEmitter();
  userId;
  images;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.route.params.forEach((urlParamaters) => {
      this.userId = urlParamaters['id'];
    });
    this.images = this.appService.getUserImages(this.userId);
  }
  detail(img){
    this.selectedImage.emit(img);
  }
}
