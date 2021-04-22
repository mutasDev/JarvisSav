import { Component, OnInit } from '@angular/core';
import { VoiceRecogService } from '../../service/voice-recog.service'
@Component({
  selector: 'app-stt',
  templateUrl: './stt.component.html',
  styleUrls: ['./stt.component.scss']
})
export class STTComponent implements OnInit {

  constructor(
    public service : VoiceRecogService
  ) {
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }


}
