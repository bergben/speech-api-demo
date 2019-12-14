import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RxSpeechRecognitionService, SpeechRecognitionModule } from '@kamiazya/ngx-speech-recognition';
import { AppComponent } from './app.component';
import { VideoContainerComponent } from './video-container/video-container.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoContainerComponent
  ],
  imports: [
    BrowserModule,
    SpeechRecognitionModule.withConfig({
      lang: 'de-de',
      continuous: true,
      interimResults: false,
      maxAlternatives: 1
    }),
  ],
  providers: [RxSpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
