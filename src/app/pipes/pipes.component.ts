import { Component, OnInit } from '@angular/core';
import { CustomPipePipe } from '../services/custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers:[CustomPipePipe]
})
export class PipesComponent implements OnInit {
  currentDate = new Date()
  greetingText = 'welcome to pipes page'


// ins9tance of custom pipe created in custompipe serive
  constructor(private customPipe: CustomPipePipe){}

  ngOnInit(): void {
  }

}
