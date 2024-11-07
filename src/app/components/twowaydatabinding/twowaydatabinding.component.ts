import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {
  user_name: string = " ";
  isChecked: boolean = false;
  colors: string[] = ['black', 'red', 'green', 'yellow'];
  favoriteColor: string ='red';

  @Input() counterValue : number =0;
  @Output() counterValueChange = new EventEmitter<number>();

  increase(){
this.counterValue++;
this.counterValueChange.emit(this.counterValue);

  }

  decrease(){
this.counterValue--;
this.counterValueChange.emit(this.counterValue);


  }

  user ={
    firstName: '',
    lastName: ''
  }
  constructor(){

  }

ngOnInit(): void {
    
}
}
