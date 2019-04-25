import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
  providers: [AppService]
})
export class ImageViewComponent implements OnInit {
  @Input() masterSelectedImage;
  @Output() closeImage = new EventEmitter;
  constructor(private appService: AppService) {}
  imageViewer = false;
  ngOnInit() {

  }

  viewImage(){
    this.imageViewer = true;
  }
  closeImageView(event){
    event = false
    this.closeImage.emit(event)
  }

  updateProfileImage(){
    this.appService.updateProfileImage(this.masterSelectedImage.url)
  }
}
