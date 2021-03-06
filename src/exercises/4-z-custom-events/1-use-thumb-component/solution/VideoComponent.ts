import {Component, Input} from '@angular/core';
import {VideoItem} from "../../shared/VideoItem";
import {Thumbs} from "../0-add-thumb-component/ThumbsComponent";

@Component({
  selector: 'my-video',
  templateUrl: 'video.html'
})
export class VideoComponent {
  @Input() video: VideoItem;

  onThumbs(thumbs: Thumbs){
    if(thumbs === Thumbs.UP){
      this.video.likes++;
    }
    if(thumbs === Thumbs.DOWN){
      this.video.likes--;
    }
  }
}
