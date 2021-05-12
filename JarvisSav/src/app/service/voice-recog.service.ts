import { Injectable } from "@angular/core";
import { Command } from "../model/commands";
import { DebugService } from "./debug.service";
import { LightService } from "./light.service";

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: "root",
})
export class VoiceRecogService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = "";
  public commands: Command[];
  tempWords;
  public exec: Command[] = [];


  constructor(private debugService: DebugService, private lightService: LightService) {
    this.commands = [
      {word: ["light"], function: lightService.toggleLight},
      {word: ["hello", "Jarvis"], function: debugService.sayHello }
    ];
  }

  execute() {

    for( const iterator of this.exec) {
      iterator.function();
    }
  }

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US";

    // This is where the magic happens

    this.recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      this.tempWords = transcript;
      this.exec = [];
      for (const iterator of this.commands) {
        let iteratorFlag = true;
        iterator.word.forEach((word: string) => {
          if(!this.tempWords.includes(word)) {
            iteratorFlag = false;
          }
        })
        if(iteratorFlag) {
          this.exec.push(iterator);
        }
      }
      window.setTimeout(() => this.execute(), 500);
      console.log(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started");
    this.recognition.addEventListener("end", (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition");
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
    this.text = "";
    console.log("End speech recognition");
  }

  wordConcat() {}
}
