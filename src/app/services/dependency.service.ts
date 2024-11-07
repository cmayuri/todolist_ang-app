import { Inject, inject, Injectable } from '@angular/core';
// import { API_BASE_URL } from '../app.tokens';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

 

  getdata(){
    return ['green', 'yellow', 'orange'];
  }

//   getInfo(){
// return this.http.get(`{this.baseUrl}/data`)
//   }

  
}
