import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  currentDate = new Date()
  greetingText = 'welcome to pipes page'


// ins9tance of custom pipe created in custompipe serive
  constructor(){}

  ngOnInit(): void {
  }

}
