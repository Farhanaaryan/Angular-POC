import { Component, OnInit,inject} from '@angular/core';
import { DisplaynameService } from '../services/displayname.service';
//import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

  export class HeaderComponent implements OnInit {

  

  
    // navItems:string[] = ['Home', 'Products', 'Sale', 'About', 'Contact']
    constructor(public displayName: DisplaynameService) { 

    }
  
    ngOnInit(): void {
    }

    // getUsername(): string | null {
    //   return this.displayName.getUsername();
    // }
  
  }
  