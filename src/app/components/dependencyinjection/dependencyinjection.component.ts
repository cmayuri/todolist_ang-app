import { Component, OnInit } from '@angular/core';
import { DependencyService } from 'src/app/services/dependency.service';

@Component({
  selector: 'app-dependencyinjection',
  templateUrl: './dependencyinjection.component.html',
  styleUrls: ['./dependencyinjection.component.css']
})
export class DependencyinjectionComponent implements OnInit {
  colors:string[]=[];

  constructor(private dependencyservice: DependencyService){
   this.colors = this.dependencyservice.getdata();
   console.log(this.colors);
   
    

  }

  ngOnInit(){
      // this.dependencyservice.getInfo().subscribe((data)=>console.log(data)
      
  }
}
