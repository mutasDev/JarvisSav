import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class DebugService {

  constructor() {

  }


  sayHello() {
    console.log("hello");
  }
}
