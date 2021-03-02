import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  sliderRange;

  @ViewChild('handle') handle;
  @ViewChild('divisor') divisor;

  moveDivisor(event){
    this.handle.nativeElement.style.left = event+"%";
	  this.divisor.nativeElement.style.width = event+"%";
  }
}
