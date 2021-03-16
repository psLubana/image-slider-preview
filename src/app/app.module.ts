import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FileUploadComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDoRahOjf-g0vnwRwdFm0oQe5u-5eIbC8I",
      authDomain: "image-slider-preview.firebaseapp.com",
      projectId: "image-slider-preview",
      storageBucket: "image-slider-preview.appspot.com",
      messagingSenderId: "111758849574",
      appId: "1:111758849574:web:fde7900a77d1c7ca7958e7",
      measurementId: "G-24TGRK40LP"
    };

    //Initialize Firebase
    if(!firebase){
      console.log(firebase)
      firebase.initializeApp(firebaseConfig);
    }
  }
}
