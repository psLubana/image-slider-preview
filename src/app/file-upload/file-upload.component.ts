import { HttpEventType, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UploadFileService } from "../upload-file.service";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent implements OnInit {
  constructor(private uploadService: UploadFileService) {}

  username;
  password;

  beforePic;
  afterPic;

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = "";

  fileInfos: Observable<any>;

  ngOnInit() {}

  submitForm() {
    alert(
      (this.username == "admin@admin" &&
        this.password == "admin" &&
        "Logined") ||
        "Invalid password"
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = "Could not upload the file!";
        this.currentFile = undefined;
      }
    );

    this.selectedFiles = undefined;
  }
}
