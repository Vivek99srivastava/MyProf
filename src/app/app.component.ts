import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
myData: Array<any>;

constructor(private http:Http){
  console.log();
 this.http.get('http://jsonplaceholder.typicode.com/photos').pipe(map(response => response.json())).subscribe(res => this.myData =res);
 
}

}




