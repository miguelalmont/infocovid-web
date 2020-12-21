import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-evolution-graphics',
  templateUrl: './evolution-graphics.component.html',
  styleUrls: ['./evolution-graphics.component.css']
})
export class EvolutionGraphicsComponent implements OnInit {

  covidGraphics: any = 'empty';

  constructor(private covidService: CovidService) { }

  async ngOnInit(): Promise<void> {
    const covidGraphics = await this.covidService.getCovidTodayGraphic();
    this.covidGraphics = covidGraphics;
    console.log(this.covidGraphics);
  }

}
