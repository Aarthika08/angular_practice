import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `<p>{{ message }}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-example';
message:string;

constructor(private dataservice:DataService)
{
  this.message=this.dataservice.getData();
}

}
