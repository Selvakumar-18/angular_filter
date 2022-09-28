import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.getData()
  }
  getData(){
    return this.http.get<any>("https://reqres.in/api/users")
    .pipe(map((res:any)=>{
     
      return res;
      
    }))
  }

  
}
