import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_filter';
  employee_data : any
  employee_data_1 : any = []
  constructor( private api: AppService) {  }
  
  ngOnInit():void{
    this.getdata()
 }

 getdata(){
  this.api.getData().subscribe(res=>{
    this.employee_data = res.data; //original data
    this.employee_data_1 = res.data//backup data
  })
 }
 search(event: any)
 {
  let searchValue = event.value
    if(searchValue == '')
    {
    
      this.employee_data_1 =  this.employee_data;
      
    }
    else if( searchValue  !== '')
    {
      this.employee_data_1 = this.employee_data.filter((data:any) =>
      {
       
        return data.first_name.toLocaleLowerCase().substring(0,searchValue.length) == searchValue
       
      })
      console.log(this.employee_data_1)
      
    }
    
  }
}
