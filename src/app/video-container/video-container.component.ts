import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WhiteListedAction } from '../white-listed-action.enum';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.sass']
})
export class VideoContainerComponent implements OnInit {
  @ViewChild('video', {static: false}) video: ElementRef<HTMLVideoElement>;
  constructor() { }

  ngOnInit() {
  }

  get videoElement() {
     return this.video.nativeElement;
  }

  triggerAction(action: WhiteListedAction) {
    switch (action) {
      case WhiteListedAction.pause:
        this.pause();
        break;
      case WhiteListedAction.abspielen:
        this.play();
        break;
      case WhiteListedAction.langsamer:
        this.decreasePlaybackSpeed();
        break;
      case WhiteListedAction.schneller:
        this.increasePlaybackSpeed();
        break;
      case WhiteListedAction.weiter:
        this.nextVideo();
        break;
      case WhiteListedAction.zurück:
        this.previousVideo();
        break;
      case WhiteListedAction.start:
        break;
      case WhiteListedAction.beenden:
        break;
    }
  }

  private pause() {
    this.videoElement.pause();
    console.log('paused');
  }
  private play() {
    this.videoElement.play();
    console.log('play');
  }
  private nextVideo() {
    console.log('nextVideo');
  }
  private previousVideo() {
    console.log('previousVideo');
  }
  private increasePlaybackSpeed() {
    console.log('increasePlaybackSpeed');
  }
  private decreasePlaybackSpeed() {
    console.log('decreasePlaybackSpeed');
  }
}
