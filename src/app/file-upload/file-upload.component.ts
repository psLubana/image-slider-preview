import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent implements OnInit {
  constructor() {}

  username;
  password;

  beforePic;
  afterPic;

  ngOnInit() {}

  submitForm() {
    alert(
      (this.username == "admin@admin" &&
        this.password == "admin" &&
        "Logined") ||
        "Invalid password"
    );
  }
}
