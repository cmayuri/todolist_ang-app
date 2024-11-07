import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesapp',
  templateUrl: './directivesapp.component.html',
  styleUrls: ['./directivesapp.component.css']
})
export class DirectivesappComponent {
  isvisible: boolean = true;

  colors: string[] =['green', 'yellow', 'orange'];
  viewmode = 'list';
  isActive = false;


}
