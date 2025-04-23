import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from './services/master.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeeleaveapplication';
  loggeduserdata:any;

  masterserv=inject(MasterService);


  constructor(){
    // const loggeddata=sessionStorage.getItem("bankuser");
    // if(loggeddata!=null){

    //   this.loggeduserdata=JSON.parse(loggeddata);

    // }
  }

  logOff(){
    sessionStorage.removeItem('bankuser');
    this.loggeduserdata=undefined;
  }
}


