import { Component ,OnInit} from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private userDataService:UserDataService){}

  name:string='';
  ngOnInit() {
    this.name = this.userDataService.name;
  }
  
}